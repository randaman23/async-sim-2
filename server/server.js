require("dotenv").config();

const express = require("express"),
  massive = require("massive"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  ctrl = require("./controller");

const app = express();
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(bodyParser.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

massive(CONNECTION_STRING).then(db => app.set("db", db));

app.post(`/api/auth/login`, ctrl.authLogin)
app.post(`/api/auth/register`, ctrl.registerUser)
app.get('/api/auth/logout', ctrl.logout)

app.listen(SERVER_PORT, () => {
  console.log(`Magic is happen' on port ${SERVER_PORT}`);
});
