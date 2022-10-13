const express = require("express");
const router = express.Router();
const warehouses = require("../../data/warehouses.json");

router.get("/", function (req, res) {
  res.send(warehouses);
});
module.exports = router;
