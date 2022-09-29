const express = require('express')
const cors = require('cors')
const webpush = require('web-push')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Constants
const subscription = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/dpy6MbzRwPQ:APA91bFBj0CGf9B5RD7RwD079iGDPK4Urc7x832d_ELCFr7pjIRIRissqLyv473AKr8CGkHYM7rQ9aWKcR3CrdaZeYX8RTymyjsjv8QWv_2To1k3AUJpJtnOOAFl3jnDA1g6mmC4GME-',
  expirationTime: null,
  keys: {
    p256dh:
      'BPzJQkEOgYm94ztAkBRIqRBexOiBEDRIcS_JfkTFn0nFHo2N_YZWnL58MCvGJJR1H-oLG6ulb7JAFISiCuovbiI',
    auth: 'qAhH_Tc1JM-DlUs15ukbug'
  }
}

const vapidKeys = {
  publicKey:
    'BHbQyjkbkMg7xLILbb0zhhCwVQygH1t47SFMBOLCG1HCqFIKmA4ZtjM1WVcnCstOig-xSk0tOwprudWi6VtCLsU',
  privateKey: 'KQcfax3HH1P5gW66vbVhulq8hT5UCnDiyjwuTSWJwf0'
}

// Webpush vapid
webpush.setVapidDetails(
  'mailto:oguerrero@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

// Routes
app.get('/', (req, res) => {
  const payload = JSON.stringify({
    title: 'Server notification',
    message: 'servere message'
  })
  webpush.sendNotification(subscription, payload)
  res.send('Funcionando correctamente')
})

app.post('/subscription', (req, res) => {
  /* const { pushSubscription } = req.body
  console.log(pushSubscription) */
  res.sendStatus(200)
})

app.post('/custom-notification', (req, res) => {
  const { title, message } = req.body
  const payload = JSON.stringify({
    title,
    message
  })
  webpush.sendNotification(subscription, payload)
  res.sendStatus(200)
})

const port = 8000

app.listen(port, () => console.log(`>>> Server listening on port ${port}`))
