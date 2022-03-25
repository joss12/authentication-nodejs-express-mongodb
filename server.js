require("dotenv").config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoute = require('./routes/auth');

app.use(express.json());
// app.use(express.urlencoded());
 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());

// app.use("/api/auth", authRoute);
app.use(authRoute);

app.use("/", (req, res)=>{
    res.send("Team project")
});


module.exports = app;


