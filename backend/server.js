const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/sendtome', require('./routes/sendToMe'));


// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));