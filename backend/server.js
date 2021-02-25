const express = require('express');
require('dotenv').config();
const nodemailer = require('nodemailer');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4002;
const path = require('path');
const productsRouter = require('./routes/products');
const db = require('./db');
const dbHelpers = require('./helpers/dbhelpers')(db);
import data from './data';

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// email route
app.use('/sendtome', require('./routes/sendToMe'))

// Anything that doesn't match the above, send back index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'))
// })

//db routes

// Product details route
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(x => x._id === productId);
  if(product) {
    res.send(product);
  }else {
    res.status(404).send({ msg: "Product Not Found. " })
  }
});

// app.use('/api/products', productsRouter(dbHelpers));
app.get("/api/products", (req, res) => {
  res.send(data.products)
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));