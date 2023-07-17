const needle = require("needle");

const randomQuote = async (req, res) => {
  try {
    const apiRes = await needle(
      "get",
      "https://www.redrisingquotes.com/api/v1/random/"
    );
    const data = apiRes.body;
    const newQuote = {
      quote: data.results[0].text,
      character: data.results[0].character,
    };
    res.status(200).json(newQuote);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = randomQuote;
