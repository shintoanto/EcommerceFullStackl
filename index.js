const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//const dbConnect = require('./config/dbConnection');
const dotenv = require("dotenv").config();
const register = require('./routes/authRoutes')
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { errorHandler, notFound } = require("./middlewares/errorHandler");


mongoose.connect("mongodb://127.0.0.1:27017/shopping").then((data) => { console.log(data) }).catch((e) => { console.log(e) })


app.use('/', (req, res) => {
    res.send("Your ecommerce project started");
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));
app.use('api/user',register);
app.use(notFound);
app.use(errorHandler);  

app.listen(3000, () => {
    console.log('Server successfull run port ' + 3000);
});