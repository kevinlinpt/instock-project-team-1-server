const express = require("express");
const router = express.Router();
const fs = require("fs");
const checkBody = require("../helper");

let allInventory;

fs.readFile("./data/inventories.json", (err, data) => {
  allInventory = JSON.parse(data);
});
