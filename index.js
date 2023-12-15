const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//const dbConnect = require('./config/dbConnection');
const dotenv = require("dotenv").config();
const register = require('./routes/authRoutes')
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

console.log(PORT);
mongoose.connect(process.env.ONGO_DB_URL).then((data) => { console.log(data) }).catch((e) => { console.log(e) })


app.use('/', (req, res) => {
    res.send("Your ecommerce project started");
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));
app.use('api/user',register);
app.listen(3000, () => {
    console.log('Server successfull run port ' + 3000);
});