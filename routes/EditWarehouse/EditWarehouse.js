const express = require("express");
const router = express.Router();
const fs = require("fs");
const checkBody = require('../helper')

let allWarehouses;

fs.readFile("./data/warehouses.json", (err, data) => {
  allWarehouses = JSON.parse(data);
});


router.post("/", function (req, res) {
    // this function will check all the values are present on the body 
  const isValidBody = checkBody(req)

  if (isValidBody) {

    const restWarehouses = allWarehouses.filter(
      (warehouses) => warehouses.id !== req.body.id
    );

    restWarehouses.push(req.body);
    

    fs.writeFile(
      "./data/warehouses.json",
      JSON.stringify(restWarehouses, null, 2),
      (err) => {
        res.send(err);
      }
    );
    res.status(201).send(restWarehouses);
  } else {
    res
      .status(400)
      .send(
        "Please provide all the values for warehouse in the body of your request"
      );
  }
});
module.exports = router;
