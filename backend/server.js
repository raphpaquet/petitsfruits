import express from 'express';
import dotenv from'dotenv';
import data from './data';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import bodyParser from 'body-parser';
const nodemailer = require('nodemailer');
const cors = require('cors');
const port = process.env.PORT || 4002;
const path = require('path');
const productsRouter = require('./routes/productRoute');

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).catch(error => console.log(error.reason))

const app = express();
app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/products", productRoute)



// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// email route
app.use('/sendtome', require('./routes/sendToMe'))


//db routes

// // Product details route
// app.get("/api/products/:id", (req, res) => {
//   const productId = req.params.id;
//   const product = data.products.find(x => x._id === productId);
//   if(product) {
//     res.send(product);
//   }else {
//     res.status(404).send({ msg: "Product Not Found. " })
//   }
// });

// app.use('/api/products', productsRouter(dbHelpers));
// app.get("/api/products", (req, res) => {
//   res.send(data.products)
// })

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));