const needleGET = require("../util/needleGET");
const randomQuote = require("./random-quote/randomQuote");
const characterQuote = require("./character-quote/characterQuote.js");
const characterNames = require("./character-names/CharacterNames");
const books = require("./books/books");
const gameQuotes = require("./game-quotes/gameQuotes");

const all = async (req, res) => {
  needleGET(
    req,
    res,
    "https://www.redrisingquotes.com/api/v1/quotes/?limit=0&offset=0"
  );
};
module.exports = {
  all,
  books,
  randomQuote,
  characterNames,
  characterQuote,
  gameQuotes,
};
