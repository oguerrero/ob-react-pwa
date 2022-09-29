import React, { useState } from 'react'
import axios from 'axios'

const NotificationManager = () => {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const sendNote = () =>
    axios
      .post('http://localhost:8000/custom-notification', { title, message })
      .then((r) => console.log(r))
      .catch((e) => console.log(e))

  return (
    <>
      <h1>Gestor de Notificaciones</h1>
      <div>
        <input
          type='text'
          placeholder='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendNote}>Send Notification</button>
      </div>
    </>
  )
}

export default NotificationManager
