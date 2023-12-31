require('dotenv').config()
const express = require('express')
const middleware = require('./middleware');
const bodyParser = require('body-parser')

const routers = require('./routers');
const app = express();


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use([...middleware]);
app.use(routers);

module.exports = app;




