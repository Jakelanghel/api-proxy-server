const needle = require("needle");
const getGameQuotes = require("./game-utils/getGameQuotes");

const gameQuotes = async (req, res) => {
  const slug = req.query.slug;
  const length = req.query.length;

  if (slug === "all-books") {
    const allBooks = [
      "red-rising",
      "golden-son",
      "morning-star",
      "iron-gold",
      "dark-age",
    ];

    try {
      const quotePromises = allBooks.map(async (bookSlug) => {
        const apiRes = await needle(
          "get",
          `https://www.redrisingquotes.com/api/v1/books/${bookSlug}/quotes`
        );
        return apiRes.body;
      });

      const quotes = await Promise.all(quotePromises);
      //   console.log(quotes);
      getGameQuotes(quotes, length);
      res.status(200).json(quotes);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    try {
      const apiRes = await needle(
        "get",
        `https://www.redrisingquotes.com/api/v1/books/${slug}/quotes`
      );
      const data = apiRes.body;
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};

module.exports = gameQuotes;
