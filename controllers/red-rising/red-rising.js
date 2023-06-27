const needleGET = require("../util/needleGET");

const books = async (req, res) => {
  needleGET(req, res, "https://www.redrisingquotes.com/api/v1/books/");
};
const characters = async (req, res) => {
  needleGET(
    req,
    res,
    "https://www.redrisingquotes.com/api/v1/characters/?limit=200&offset=0/"
  );
};

const characterQuote = async (req, res) => {
  const slug = req.query.slug;
  needleGET(
    req,
    res,
    `https://www.redrisingquotes.com/api/v1/characters/${slug}/quotes`
  );
};

const randomQuote = async (req, res) => {
  needleGET(req, res, "https://www.redrisingquotes.com/api/v1/random/");
};

module.exports = { books, characters, randomQuote, characterQuote };
