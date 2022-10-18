const express = require("express")
const router = express.Router()
const Warehouses = require("../../data/warehouses.json")

router.get("/:name", function (req, res) {
  let name = req.params.name
  // let upperName = name.charAt(0).toUpperCase() + name.slice(1)
  if (name) {
    const singleWarehouse = Warehouses.find((item) => item.name === name)
    res.send(singleWarehouse)
  } else {
    return res
      .status(400)
      .send("The warehouse is not found please check the name of the warehouse")
  }
})

module.exports = router
