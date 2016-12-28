'use strict'

const express = require("express")

let app = express()

app.get('/', (req, res) => {
  res.json({
    data: {
      type: "message",
      id: Date.now(),
      attributes: {
        message: "Hello World"
      }
    }
  })
})

const PORT = 4000

app.listen(PORT, _ => {
  console.log("magic is happening on port " + PORT)
})