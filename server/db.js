const {MongoClient, ObjectId} = require("mongodb");
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.DB_URI;

const client = new MongoClient(uri);

module.exports = {
    dbConnect: async function dbConnect() {
        try {
            await client.connect();
            console.log("Connection Successful");
        }
        catch (err) {
            console.log(err);
        }
    }
};