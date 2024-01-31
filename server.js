const express = require('express');
const app = express();
const db = require('./db');

// Conversion of data into the JSON format
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // This will parse the JSON data in the request body

app.get('/', function (req, res) {
  res.send('Hello World');
  console.log("Home page is starting right now.");
});

// Routes start from here
const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);
//Menu start from here.

const menuRoutes = require('./routes/menuRoutes');
app.use('/menuData', menuRoutes);

// it is listen port
app.listen(3000, () => {
  console.log("Listening on port 3000.");
});