import express from 'express';
import dotenv from'dotenv';
import path from 'path'
import config from './config';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter';
import productRouter from './routes/productRouter';
import orderRouter from './routes/orderRouter';
import bodyParser from 'body-parser';
const nodemailer = require('nodemailer');
const cors = require('cors');
const port = process.env.PORT || 4002;



dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).catch(error => console.log(error.reason))

const app = express();
app.use(bodyParser.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);



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





// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));