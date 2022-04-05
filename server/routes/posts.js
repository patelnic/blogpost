const express = require('express');
const req = require("express/lib/request");
const router = express.Router();
const db = require("../db.js");

router.get("/", async function(req, res) {
    try {
        console.log("In / get")
        const cursor = await db.findAllBlogPost();
        const data = await cursor.toArray();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
});

module.exports.router = router;
