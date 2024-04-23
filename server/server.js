const connection = require('./config/connection');
const express = require('express');
const routes = require('./routes');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  } else {
    app.use(express.static(path.join(__dirname, '../client/public')))
  }

  //sync sequelize models to the database, then turn on the server
connection.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => console.log(`listening on port ${PORT}`))
})