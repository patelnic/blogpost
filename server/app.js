const express = require("express");
const path = require('path')
const mydb = require('./db.js');
const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(express.static(__dirname + "/public"));

const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT || 4000;

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());

app.use(express.static('public'));
app.set("view engine", "pug");

const posts = require("./routes/posts.js");
app.use("/", posts.router);

mydb.dbConnect().then (() => app.listen(port, () => {
    console.log("App is running on port " + port);
}));
