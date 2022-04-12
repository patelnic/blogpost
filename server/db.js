const {MongoClient, ObjectId} = require("mongodb");
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.DB_URI;

const client = new MongoClient(uri);
const dbName = 'blogs';
module.exports = {
    dbConnect: async function dbConnect() {
        try {
            await client.connect();
            console.log("DB Connection Successful");
        }
        catch (err) {
            console.log(err);
        }
    },
    saveBlogPost: async function saveBlogPost(blogPost) {
        try {
            const data = await client.db(dbName).collection('posts').insertOne(blogPost);
            console.log("Blog Post creation successful")
            return data;
        } catch (err) {
            console.log(err);
        }
    },
    findAllBlogPost: async function findAllBlogPost() {
        try {
            const data = await client.db(dbName).collection('posts').find();
            return data;
        } catch (err) {
            console.log(err);
        }
    }, 
    deleteBlogPost: async function deleteBlogPost(id) {
        
        try {
            const data = await client.db(dbName).collection('posts').deleteOne({_id : ObjectId(id)});
            return data;
        } catch(err) {
            console.log(err);
        }
    },
    findPost: async function findPost(id) {
        try {
            const data = await client.db(dbName).collection('posts').findOne({_id : ObjectId(id)});
            return data;
        } catch (err) {
            console.log(err);
        }
    },
    updateBlogPost: async function updateBlogPost(blogPost) {
        try {
            const id = {_id:ObjectId(blogPost._id)};
            const update = {
                "$set": {
                  "title": blogPost.title,
                  "description": blogPost.description,
                  "date": blogPost.date
                }
              };
            const options = { returnNewDocument: true };

            const data = await client.db(dbName).collection('posts').findOneAndUpdate(id, update, options);
            console.log("Blog Post update successful")
            return data;
        } catch (err) {
            console.log(err);
        }
    }
};