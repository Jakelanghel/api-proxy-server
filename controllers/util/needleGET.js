const needle = require("needle");

const needleGET = async (req, res, url, params) => {
  try {
    const apiRes = await needle("get", `${url}?${params}`);
    const data = apiRes.body;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = needleGET;
