const needle = require("needle");

const fetchBookQuotes = async (bookSlug) => {
  const apiRes = await needle(
    "get",
    `https://www.redrisingquotes.com/api/v1/books/${bookSlug}/quotes`
  );
  return apiRes.body;
};

module.exports = fetchBookQuotes;
