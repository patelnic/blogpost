const express = require("express");
const mydb = require('./db');
const app = express();

app.use(express.json());

const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT || 4000;

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(express.static('public'));

mydb.dbConnect().then (() => app.listen(port, () => {
    console.log("App is running on port " + port);
}));