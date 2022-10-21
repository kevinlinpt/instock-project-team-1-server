const express = require("express");
const router = express.Router();
const fs = require("fs");

let allWarehouses;

fs.readFile("./data/warehouses.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  allWarehouses = JSON.parse(data);
});

router.get("/", function (req, res) {
  res.status(201).send(allWarehouses);
});
module.exports = router;
