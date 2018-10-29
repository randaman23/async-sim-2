require("dotenv").config();

const express = require("express"),
  massive = require("massive"),
  bodyParser = require("body-parser"),
  ctrl = require("./controller");

const app = express()

app.use(bodyParser.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => app.set("db", db))

app.listen(SERVER_PORT, () => {
    console.log(`Magic is happen' on port ${SERVER_PORT}`)
})


