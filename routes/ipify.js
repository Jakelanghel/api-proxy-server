const url = require("url");
const express = require("express");
const needle = require("needle");
const router = express.Router();

const ipify = require("../controllers/ipify");

router.get("/", ipify);

module.exports = router;
