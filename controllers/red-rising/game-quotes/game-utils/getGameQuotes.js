const filterQuotes = require("./filters/filterQuotes");
const filterName = require("./filters/filterName");

const getGameQuotes = (data, slug, length) => {
  // filter out quotes that are to long or are from an un-named character
  const filteredQuotes = filterQuotes(slug, data);
  const questions = [];
  let bookIndex = 0;
  for (let i = 0; i < length; i++) {
    // if all-books use bookIndex to get current book array
    const book = slug === "all-books" ? filteredQuotes[bookIndex] : data.quotes;
    const maxIndex = book.length;
    if (maxIndex === 0) {
      break; // Exit the loop if there are no quotes in the current book
    }
    const randIndex = Math.floor(Math.random() * maxIndex);
    const quote = book[randIndex];
    questions.push(quote);
    if (slug === "all-books") {
      bookIndex = (bookIndex + 1) % filteredQuotes.length;
    }
  }
  console.log(slug);
  console.log(questions);
  // return the results of filterName
  return filterName(questions);
};

module.exports = getGameQuotes;
