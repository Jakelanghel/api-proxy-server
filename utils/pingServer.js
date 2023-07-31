const fetch = require("node-fetch");

const pingServer = () => {
  // Send a request to the ping endpoint
  // Replace 'https://dynamic-api-proxy.onrender.com/api/red-rising/ping' with your server's domain or IP address
  fetch("https://dynamic-api-proxy.onrender.com/api/red-rising/ping")
    .then((response) => {
      if (response.ok) {
        console.log("Server pinged successfully");
      } else {
        console.log("Error pinging the server");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

module.exports = pingServer;
