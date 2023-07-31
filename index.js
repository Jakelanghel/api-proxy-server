const express = require("express");
const cors = require("cors");
const pingServer = require("./utils/pingServer.js");
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

// Middleware to handle ping requests
app.use("/api/red-rising/ping", pingServer);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// Ping the server every 15 minutes (900000 milliseconds)
const pingInterval = 15 * 60 * 1000;
setInterval(pingServer, pingInterval);
