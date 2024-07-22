const connection = require('./config/connection');
const express = require('express');
const routes = require('./routes');
const path = require('path');
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 3001;

const app = express();

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 1200000, //10 mins
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: connection
  })
};


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sess));
app.use(routes);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
  } else {
    app.use(express.static(path.join(__dirname, '../client/public')))
  }

  //sync sequelize models to the database, then turn on the server
connection.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => console.log(`listening on port ${PORT}`))
});