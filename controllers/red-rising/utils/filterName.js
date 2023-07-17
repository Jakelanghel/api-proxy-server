export const filterName = (arr) => {
  // if characters name is in quote replace it with "blank"
  const filteredArr = arr.map((quote) => {
    const quoteArr = quote.text.split(" ");
    let character = quote.character.split(" ")[0];
    const filteredQuote = quoteArr.map((word) => {
      return word === character ? "blank" : word;
    });
    const modifiedText = filteredQuote.join(" ");
    const modifiedQuote = { ...quote, text: modifiedText };
    return modifiedQuote;
  });
  return filteredArr;
};
