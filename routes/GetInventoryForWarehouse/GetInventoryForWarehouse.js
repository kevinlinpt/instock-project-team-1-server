const express = require("express");
const router = express.Router();
const inventoryItems = require("../../data/inventories.json");

router.get("/", function (req, res) {
  if (req.body.warehouseID) {
    const inventory = inventoryItems.filter(
      (item) => item.warehouseID === req.body.warehouseID
    );
    res.send(inventory);
  } else {
    return res
      .status(400)
      .send("The warehouse ID you have provided is invalid. Please try again.");
  }
});

module.exports = router;
