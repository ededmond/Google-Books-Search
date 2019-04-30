const router = require("express").Router();
const Book = require("../models/book.js");

router.get("/api/books",(req,res) => {
    res.json("hello");
})

module.exports = router;