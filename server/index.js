const express = require('express')
const bodyparser = require('body-parser')
const { admin } = require('./firebaseConfig')
const cors = require('cors')
const app = express()

app.use(cors());
app.use(bodyparser.json())

const port = 3400

const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};

const notificationBody = { "notification": { "title": 'Notification title', "body": 'This is notification body.', "icon": "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png", 'sound': 'dog-barking-2054.mp3' }}


app.post('/firebase/notification', (req, res) => {
    const registrationToken = req.body.fcmToken
    const notification = notificationBody
    const options = notification_options

    admin.messaging().sendToDevice(registrationToken, notification, options)
        .then(response => {

            res.status(200).send(response)

        })
        .catch(error => {
            res.status(500).send(error)
            console.log(error);
        });

})

app.listen(port, () => {
    console.log("Server started at port" + port)
})