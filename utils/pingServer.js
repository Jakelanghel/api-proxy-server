const axios = require("axios");

const pingServer = () => {
  axios
    .get("https://dynamic-api-proxy.onrender.com/api/red-rising/ping")
    .then((response) => {
      if (response.status === 200) {
        console.log("Server pinged successfully");
      } else {
        ("Error pinging the server");
      }
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};

module.exports = pingServer;
