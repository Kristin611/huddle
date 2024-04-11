const connection = require('./config/connection');
const express = require('express');
const routes = require('./routes')

const PORT = process.env.PORT || 3001;

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

connection.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => console.log(`listening on port ${PORT}`))
})