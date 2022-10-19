const express = require("express")
const router = express.Router()
const Warehouses = require("../../data/warehouses.json")

router.get("/:id", function (req, res) {
  let warehouseID = req.params.id

  if (warehouseID) {
    const singleWarehouse = Warehouses.find((item) => item.id === warehouseID)
    res.send(singleWarehouse)
  } else {
    return res
      .status(400)
      .send("The warehouse is not found please check the name of the warehouse")
  }
})

module.exports = router
