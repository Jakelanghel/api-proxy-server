const filterQuotes = (slug, data) => {
  const runFilter = (array) => {
    return array.filter(
      (quote) =>
        quote.text.length < 250 && quote.character.split(" ")[0] !== "Unnamed"
    );
  };
  // if user selected all books arr will be an array or arrays
  if (slug === "all-books") {
    // get just the quotes from each book object
    const allQuotes = data.map((book) => book.quotes);
    const filteredQuotes = allQuotes.map((quote) => runFilter(quote));
    return filteredQuotes;
  } else {
    // if single book is selected then data will be a object containing a quotes array
    const filteredQuotes = runFilter(data.quotes);
    return filteredQuotes;
  }
};

module.exports = filterQuotes;
// map over each quotes array and run filter on the array
