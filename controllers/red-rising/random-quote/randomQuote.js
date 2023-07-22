const needle = require("needle");

const randomQuote = async (req, res) => {
  try {
    const apiRes = await needle(
      "get",
      "https://www.redrisingquotes.com/api/v1/random/"
    );
    const data = apiRes.body;
    console.log(data);
    const chapterArr = data.results[0].chapter.split(" ");
    let chapterNumber = chapterArr[0].slice(0, -1);
    chapterNumber = chapterNumber.replace(/^[a-zA-Z]+:/, "").trim();
    let chapterName = chapterArr.slice(1).join(" ");

    const newQuote = {
      book: data.results[0].book,
      quote: data.results[0].text,
      character: data.results[0].character,
      chapterNumber: chapterNumber,
      chapterName: chapterName,
    };
    res.status(200).json(newQuote);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = randomQuote;
