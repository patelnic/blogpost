const express = require('express');
const req = require("express/lib/request");
const { ConnectionClosedEvent } = require("mongodb");
const { dbConnect } = require("../db");
const router = express.Router();
const db = require("../db.js");

router.get("/posts", async function(req, res) {
    try {
        console.log("in get all");
        const cursor = await db.findAllBlogPost();
        const data = await cursor.toArray();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
});

router.get("/posts/:id", async function(req, res) {
    try {
        console.log("in find one");
        const id = req.params;
        console.log(id);
        const data = await db.findPost(id);
        res.json(data);
    } catch (err) {
        console.log(err);
    }
});

router.post('/createblog', async function (req, res) {
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
        console.log(id);
        const data = await db.deleteBlogPost(id)
        res.json(data);
    } catch(err) {
        console.log(err)
    }
})

module.exports.router = router;
