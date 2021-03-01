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

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


dotenv.config();

// MONGO DB SETPUP
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).catch(error => console.log(error.reason))

// ROUTES 
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);



// STRIPE SET UP
// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const stripe = require("stripe")("sk_test_51I6Jt9HsmgbtTrbqZeHwe4pU1cmN7qxM1W3cN6W3OHrxGnHoT2zwfaFuhz6iJuD5HDgLwGPlOg2cFmYjPHqJt4pl00FiCiboql");

app.post("/stripe/charge", cors(), async (req, res) => {
  console.log("stripe-routes.js 9 | route reached", req.body);
  let { amount, id } = req.body;
  console.log("stripe-routes.js 10 | amount and id", amount, id);
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Your Company Description",
      payment_method: id,
      confirm: true,
    });
    console.log("stripe-routes.js 19 | payment", payment);
    res.json({
      message: "Payment Successful",
      success: true,
    });
  } catch (error) {
    console.log("stripe-routes.js 17 | error", error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))


// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// email route
app.use('/sendtome', require('./routes/sendToMe'))





// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));