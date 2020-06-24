import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {messaging} from './firebaseConfig'



function App() {

  const sendNotification = () => {
    messaging.requestPermission()
      .then(function () {
        console.log('Have Permission');
        return messaging.getToken();
      })
      .then(function (token) {
        console.log(token);
        axios.post('http://localhost:3400/firebase/notification', { fcmToken: token }).then(response => {
          if (response.status === 200) {
            console.log(response)
          }
        }).catch((err)=>console.log(err))
      })
      .catch(function (err) {
        console.log(err)
        console.log('Error Occured')
      })

    messaging.onMessage(function (payload) {
      console.log('Message Received', payload)
      const title = payload.notification.title;
      const body = payload.notification.body
      return alert(`${title} ${body}`)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={sendNotification}>Push Notification</button>
      </header>
    </div>
  );
}

export default App;
