const express = require("express");
const path = require('path')
const mydb = require('./db');
const app = express();

app.use(express.static(path.resolve(__dirname, "./client/blogpost/build")));
app.use(express.json());

const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT || 4000;

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(express.static('public'));
app.set("view engine", "pug");

const posts = require("./routes/posts.js");
app.use("/", posts.router);

app.use(express.static('public'));

mydb.dbConnect().then (() => app.listen(port, () => {
    console.log("App is running on port " + port);
}));