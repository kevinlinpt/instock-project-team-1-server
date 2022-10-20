const express = require("express")
const router = express.Router()
const inventory = require("../../data/inventories.json")

router.get("/", function (req, res) {
  res.send(inventory)
})
module.exports = router
