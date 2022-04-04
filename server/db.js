const {MongoClient, ObjectId} = require("mongodb");
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.DB_URI;

const client = new MongoClient(uri);
const dbName = 'blogpost';
module.exports = {
    dbConnect: async function dbConnect() {
        try {
            await client.connect();
            console.log("Connection Successful");
        }
        catch (err) {
            console.log(err);
        }
    },
    saveBlogPost: async function saveBlogPost(blogPost) {
        try {
            const data = await client.db('blogs').collections("posts").insertOne(blogPost);
            console.log("Blog Post creation successful")
            return data;
        } catch (err) {
            console.log(err);
        }
    },
    findAllBlogPost: async function findAllBlogPost() {
        try {
            const data = await client.db('blogs').collections("posts").find()
            return data;
        } catch (err) {
            console.log(err);
        }
    }
};