const needleGET = require("../../util/needleGET");

const charactersNames = async (req, res) => {
  needleGET(
    req,
    res,
    "https://www.redrisingquotes.com/api/v1/characters/?limit=200&offset=0/"
  );
};

module.exports = charactersNames;
