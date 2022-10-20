const express = require("express");
const router = express.Router();
const fs = require("fs");

let allInventoryItems;

fs.readFile("./data/inventories.json", (err, data) => {
  allInventoryItems = JSON.parse(data);
});

router.get("/", function (req, res) {
  if (req.body.warehouseID) {
    const inventory = allInventoryItems.filter(
      (item) => item.warehouseID === req.body.warehouseID
    );
    res.status(201).send(inventory);
  } else {
    return res
      .status(400)
      .send("The warehouse ID you have provided is invalid. Please try again.");
  }
});

module.exports = router;