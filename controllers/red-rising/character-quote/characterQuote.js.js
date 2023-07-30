const needle = require("needle");
const generateRandomNumbers = require("../../../utils/generateRandomNumbers");

const characterQuote = async (req, res) => {
  const slug = req.query.slug;
  const quantity = req.query.quantity === "all" ? 0 : req.query.quantity;
  try {
    const apiRes = await needle(
      "get",
      `https://www.redrisingquotes.com/api/v1/characters/${slug}/quotes`
    );
    const data = apiRes.body;
    const quotesArr = data.quotes;
    if (quantity !== 0 && quantity < quotesArr.length) {
      const indexArr = generateRandomNumbers(quotesArr, quantity);
      const modifiedQuotes = indexArr.map((index) => quotesArr[index]);
      res.status(200).json({ ...data, quotes: modifiedQuotes });
    } else {
      11551;
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = characterQuote;
