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

const { ping } = require("../controllers/util/ping");

router.get("/all", all);
router.get("/ping", ping);
router.get("/books", books);
router.get("/random", randomQuote);
router.get("/characters", characterNames);
router.get("/character-quotes", characterQuote);
router.get("/game", gameQuotes);
module.exports = router;
