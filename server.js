require('dotenv').config()
const app = require('./app/app')
const http = require('http');

const server = http.createServer(app);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})