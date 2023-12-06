const express = require("express");
const app = express();
//const dbConnect = require('./config/dbConnection');
const dotenv = require("dotenv").config();
const register = require('./routes/authRoutes')
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');


mongoose.connect(process.env.ONGO_DB_URL).then((data) => { console.log(data) }).catch((e) => { console.log(e) })
//dbConnect();

app.use('/', (req, res) => {
    res.send("Your ecommerce project started");
});
app.use('user/use',register);
app.listen(PORT, () => {
    console.log('Server successfull run port ' + PORT);
});