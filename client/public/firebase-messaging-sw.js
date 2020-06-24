importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');
import { messaging } from './../src/firebaseConfig'

messaging.setBackgroundMessageHandler(function (payload) {
    const title = payload.notification.title;
    const options = {
        body: payload.notification.body,
        icon: './logo512.png',
        sound:'http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg'
    };
    self.registration.showNotification(title,options)   
 });

