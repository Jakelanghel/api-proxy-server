const fetchBookQuotes = require("./fetchBookQuotes");

const fetchAllBookQuotes = async () => {
  const allBooks = [
    "red-rising",
    "golden-son",
    "morning-star",
    "iron-gold",
    "dark-age",
  ];
  const quotePromises = allBooks.map((bookSlug) => fetchBookQuotes(bookSlug));
  const quotes = await Promise.all(quotePromises);
  return quotes;
};

module.exports = fetchAllBookQuotes;
