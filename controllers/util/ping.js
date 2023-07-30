const ping = (req, res) => {
  console.log("Ping received at:", new Date().toISOString());
  res.sendStatus(200);
};

module.exports = ping;
