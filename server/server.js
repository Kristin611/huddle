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

// logging middleware 
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

  } else {
    app.use(express.static(path.join(__dirname, '../client/public')))
  }

  app.use(routes);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  })  


  //sync sequelize models to the database, then turn on the server
connection.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => console.log(`listening on port ${PORT}`))
});