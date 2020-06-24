importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');
import { logo } from './logo512.png';
import { messaging } from './../src/firebaseConfig'

messaging.setBackgroundMessageHandler(function (payload) {
    const title = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: {logo},
        sound:'dog-barking-2054.mp3'
    };
    self.registration.showNotification(title,notificationOptions)   
 });

