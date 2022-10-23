const express = require("express");
const router = express.Router();
const fs = require("fs");
const checkBody = require("../helperinventory");

let allInventory;

fs.readFile("./data/inventories.json", (err, data) => {
  allInventory = JSON.parse(data);
});

//express router ---> validation for body data
router.post("/edit", function (req, res) {
  const isValidBody = checkBody(req);

  if (isValidBody) {
    const restInventory = allInventory.filter(
      (inventory) => inventory.id !== req.body.id
    );
    restInventory.push(req.body);

    fs.writeFile(
      "./data/inventories.json",
      JSON.stringify(restInventory, null, 2),
      (err) => {
        res.send(err);
      }
    );
    res.status(201).send(restInventory);
  } else {
    res
      .status(400)
      .send(
        "Please provide all the values for inventory in the body of your request!"
      );
  }
});

module.exports = router;
