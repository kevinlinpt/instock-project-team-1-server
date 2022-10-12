const express = require("express");
const router = express.Router();
const warehouses = require("../../data/warehouses.json");
const fs = require("fs");

router.post("/", function (req, res) {
  warehouses.push(req.body);
  fs.watchFile("../../data/warehouses.json", warehouses, (err) => {
    console.log(err);
  });
  return res.status(201).send(warehouses);
});

module.exports = router;
