const express = require("express");
const cors = require("cors");
const ipify = require("./routes/ipify.js");
const redRising = require("./routes/red-rising.js");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();

app.set("trust proxy", true);

// Enable cors
app.use(cors());

// Routes
app.use("/api/ipify", ipify);
app.use("/api/red-rising", redRising);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// Ping the server every 15 minutes (900000 milliseconds)
const pingInterval = 15 * 60 * 1000;
setInterval(() => {
  // Send a request to the ping endpoint
  // Replace 'localhost' with your server's domain or IP address
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
}, pingInterval);
