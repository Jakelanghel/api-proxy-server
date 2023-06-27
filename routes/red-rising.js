const express = require("express");
const router = express.Router();

const {
  books,
  characters,
  randomQuote,
  characterQuote,
} = require("../controllers/red-rising/red-rising");

router.get("/books", books);
router.get("/characters", characters);
router.get("/random", randomQuote);
router.get("/character-quotes/", characterQuote);
module.exports = router;
