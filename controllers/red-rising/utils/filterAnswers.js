export const filterAnswers = (arr, correctAnswer) => {
  return arr.filter(
    (quote) =>
      quote.name.split(" ")[0] !== "Unnamed" &&
      quote.name.split(" ")[0] !== correctAnswer
  );
};
