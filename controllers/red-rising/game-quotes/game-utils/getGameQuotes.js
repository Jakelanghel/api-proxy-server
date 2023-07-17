const generateRandomNumbers = require("../../utils/generateRandomNumbers");
const filterQuotes = require("./filterQuotes");

const getGameQuotes = (arr, length) => {
  const allQuotes = arr.map((book) => book.quotes);

  const filteredQuotes = filterQuotes(allQuotes.flat());
  console.log(filteredQuotes);
  //   const indexArr = generateRandomNumbers(arr, length);
  //   const questions = indexArr.map((index) => filteredQuotes[index]);
};

module.exports = getGameQuotes;
