const express = require("express");
const cors = require("cors");
const ipify = require("./routes/ipify.js");
const requestIp = require("request-ip");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();

// Use the request-ip middleware
app.use(requestIp.mw());

// Enable cors
app.use(cors());

// Routes
app.use("/api/ipify", ipify);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
