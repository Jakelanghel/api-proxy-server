const url = require("url");
const needle = require("needle");

const ipify = async (req, res) => {
  // Env vars
  const IPIFY_BASE_URL = process.env.IPIFY_BASE_URL;
  const IPIFY_KEY_NAME = process.env.IPIFY_KEY_NAME;
  const IPIFY_KEY_VALUE = process.env.IPIFY_KEY_VALUE;
  let ip = null;
  let domain = null;

  if (!req.params.query) {
    const clientIP = req.clientIp;
  } else {
    ip = req.query.ipAddress;
    domain = req.query.domain;
  }

  try {
    const params = new URLSearchParams({
      [IPIFY_KEY_NAME]: IPIFY_KEY_VALUE,
      domain: domain || "",
      ipAddress: ip || "",
      ...url.parse(req.url, true).query,
    });
    const apiRes = await needle("get", `${IPIFY_BASE_URL}?${params}`);
    const data = apiRes.body;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = ipify;
