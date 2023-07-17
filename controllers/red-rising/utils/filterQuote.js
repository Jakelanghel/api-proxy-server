import { generateRandomNumbers } from "./generateRandomNumbers";

export const filterQuotes = (arr, length) => {
  // filter out quotes that are to long or are from un-named characters
  const quotesArr = arr.filter(
    (quote) =>
      quote.text.length < 250 && quote.character.split(" ")[0] !== "Unnamed"
  );
  // get random indexes and use them to select random quotes
  const indexArr = generateRandomNumbers(quotesArr, length);
  return indexArr.map((index) => quotesArr[index]);
};
