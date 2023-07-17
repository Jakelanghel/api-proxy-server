const express = require("express");
const router = express.Router();

const {
  all,
  books,
  randomQuote,
  characterNames,
  characterQuote,
  gameQuotes,
} = require("../controllers/red-rising/red-rising");

router.get("/all", all);
router.get("/books", books);
router.get("/random", randomQuote);
router.get("/characters", characterNames);
router.get("/character-quotes/", characterQuote);
router.get("/game/", gameQuotes);
module.exports = router;
