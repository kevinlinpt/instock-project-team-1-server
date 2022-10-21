const express = require("express")
const router = express.Router()

const fs = require("fs")

let Warehouses

fs.readFile("./data/warehouses.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  Warehouses = JSON.parse(data)
})
router.get("/:id", function (req, res) {
  let warehouseID = req.params.id

  if (warehouseID) {
    const singleWarehouse = Warehouses.find((item) => item.id === warehouseID)
    res.status(201).send(singleWarehouse)
  } else {
    return res
      .status(400)
      .send("The warehouse is not found please check the name of the warehouse")
  }
})

module.exports = router
