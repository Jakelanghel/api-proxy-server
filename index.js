const express = require("express");
const cors = require("cors");
const ipify = require("./routes/ipify.js");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();

app.set("trust proxy", true);

// Enable cors
app.use(cors());

// Routes
app.use("/api/ipify", ipify);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
