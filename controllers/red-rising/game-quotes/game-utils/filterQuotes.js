const filterQuotes = (arr) => {
  return arr.filter(
    (quote) =>
      quote.text.length < 250 && quote.character.split(" ")[0] !== "Unnamed"
  );
};

module.exports = filterQuotes;
