const express = require("express");
const router = express.Router();
const fs = require("fs");

let allInventoryItems;

fs.readFile("./data/inventories.json", (err, data) => {
  allInventoryItems = JSON.parse(data);
});

router.delete("/", function (req, res) {
  if (req.body.id) {
    const inventoryItems = allInventoryItems.filter(
      (item) => item.id !== req.body.id
    );
    fs.writeFile(
      "./data/inventories.json",
      JSON.stringify(inventoryItems, null, 2),
      (err) => {
        res.send(err);
      }
    );
    res.status(201).send(inventoryItems);
  } else {
    return res
      .status(400)
      .send(
        "The inventory ID you have provided is invalid. Please try again.."
      );
  }
});

module.exports = router;
