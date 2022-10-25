const express = require("express");
const router = express.Router();
const fs = require("fs");
const checkBody = require('../helperInventory')

let allInventoryItems;

fs.readFile("./data/inventories.json", 'utf-8', (err, data) => {
  allInventoryItems = JSON.parse(data);
});

router.post("/create", function (req, res) {
    // this function will check all the values are present on the body 
  const isValidBody = checkBody(req)
  if (isValidBody) {
    allInventoryItems.push(req.body);
    
    fs.writeFile(
      "./data/inventories.json",
      JSON.stringify(allInventoryItems, null, 2),
      (err) => {
        res.send(err);
      }
    );
    res.status(201).send(allInventoryItems);
  } else {
    res
      .status(400)
      .send(
        "Please provide all the parameters for the inventory in the body of your request"
      );
  }
});
module.exports = router;
