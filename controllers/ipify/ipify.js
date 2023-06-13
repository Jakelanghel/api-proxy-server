const url = require("url");
const needle = require("needle");
const needleGET = require("../util/needleGET");

const ipify = async (req, res) => {
  // Env vars
  const IPIFY_BASE_URL = process.env.IPIFY_BASE_URL;
  const IPIFY_KEY_NAME = process.env.IPIFY_KEY_NAME;
  const IPIFY_KEY_VALUE = process.env.IPIFY_KEY_VALUE;
  let ip = "";
  let domain = "";

  if (!req.params.query) {
    ip = req.ip;
  } else {
    ip = req.query.ipAddress;
    domain = req.query.domain;
  }

  const params = new URLSearchParams({
    [IPIFY_KEY_NAME]: IPIFY_KEY_VALUE,
    domain: domain || "",
    ipAddress: ip || "",
    ...url.parse(req.url, true).query,
  });
  needleGET(req, res, IPIFY_BASE_URL, params);
};

module.exports = ipify;
