const express = require("express");
const router = express.Router();

const { books, characters } = require("../controllers/red-rising/red-rising");

router.get("/", books);
router.get("/characters", characters);

module.exports = router;
