const express = require("express")
const router = express.Router()
const Warehouses = require("../../data/warehouses.json")

router.get("/:id", function (req, res) {
  let id = req.params.id
  if (id) {
    const singleItem = Warehouses.find((item) => item.id === id)
    res.send(singleItem)
  } else {
    return res
      .status(400)
      .send("The item is not found pls check the id of the item")
  }
})

module.exports = router
