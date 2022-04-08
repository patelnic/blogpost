const express = require('express');
const req = require("express/lib/request");
const { ConnectionClosedEvent } = require("mongodb");
const { dbConnect } = require("../db");
const router = express.Router();
const db = require("../db.js");

router.get("/", async function(req, res) {
    try {
        const cursor = await db.findAllBlogPost();
        const data = await cursor.toArray();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async function (req, res) {
    try{
        const data = await db.saveBlogPost(req.body);
        res.json(data);
    }
    catch (err) {
        console.log(err);
    }
});

router.delete("/:id", async function(req, res) {
    try {
        const id = req.params.id;
        const data = await db.deleteBlogPost(id)

        res.json(data);
    } catch(err) {
        console.log(err)
    }
})

module.exports.router = router;
