const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

const mongoDB = process.env.DB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const BlogPost = mongoose.Schema({
    blogTitle : String,
    blogDescription : String,
        
})

const Blogs = mongoose.model("Blogs", BlogPost);

module.exports = Blogs;