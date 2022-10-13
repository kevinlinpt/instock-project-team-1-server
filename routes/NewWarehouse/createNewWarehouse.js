const express = require("express");
const router = express.Router();
const fs = require("fs");

let savedWarehouses;
fs.readFile("./data/warehouses.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  try {
    savedWarehouses = JSON.parse(data);
  } catch (error) {
    console.log(error, "try catch");
  }
});
const a = {
  name: "aa",
};
router.post("/", function (req, res) {
  savedWarehouses.push(req.body);
  fs.writeFile(
    "./data/warehouses.json",
    JSON.stringify(savedWarehouses, null, 2),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  return res.status(201).send(savedWarehouses);
});

module.exports = router;
