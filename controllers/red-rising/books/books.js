const needleGET = require("../../util/needleGET");

const books = async (req, res) => {
  needleGET(req, res, "https://www.redrisingquotes.com/api/v1/books/");
};

module.exports = books;
