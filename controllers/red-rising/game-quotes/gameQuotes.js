const fetchBookQuotes = require("./game-utils/fetch/fetchBookQuotes");
const fetchAllBookQuotes = require("./game-utils/fetch/fetchAllBookQuotes");
const getGameQuotes = require("./game-utils/getGameQuotes");

const gameQuotes = async (req, res) => {
  const slug = req.query.slug;
  const length = req.query.length;

  if (slug === "all-books") {
    try {
      const data = await fetchAllBookQuotes();
      const gameQuotes = getGameQuotes(data, slug, length);
      res.status(200).json(gameQuotes);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    try {
      const data = await fetchBookQuotes(slug);
      const gameQuotes = getGameQuotes(data, slug, length);
      res.status(200).json(gameQuotes);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};

module.exports = gameQuotes;
