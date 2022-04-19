const express = require('express');
const req = require("express/lib/request");
const { ConnectionClosedEvent } = require("mongodb");
const { dbConnect } = require("../db");
const router = express.Router();
const db = require("../db.js");

router.get("/posts", async function(req, res) {
    try {
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

router.post('/users', async function (req, res) {
    try {
        const data = await db.saveUser(req.body);
        res.json(data);
    } catch (err) {
        console.log(err);
    }
});

router.delete("/posts/:id", async function(req, res) {
    try {
        const id = req.params.id;
        const data = await db.deleteBlogPost(id)
        res.json(data);
    } catch(err) {
        console.log(err)
    }
})

router.post("/search/:value", async function(req,res) {
    const value = req.params.value
    console.log("Search = " + req.params.value);
    try {
        const data = await db.findSearch(value);
        if (data == null) {
            const insertSearch = await db.insertSearch(value)
        } else {
            await db.updateSearch(value);
        }
    } catch (err) {

    }
})

router.get("/users/:user", async function(req, res) {
    try {
        const userEmail = req.params.user
        const data = await db.findUser(userEmail);
        res.json(data);
    } catch (err) {
        console.log(err);
    }
})

router.post("/posts/:id/update", async function(req, res) {
    try {
        const data = await db.updateBlogPost(req.body)
        res.json(data);
    } catch(err) {
        console.log(err)
    }
})

module.exports.router = router;
