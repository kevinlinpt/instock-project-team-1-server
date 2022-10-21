const express = require("express")
const router = express.Router()
const fs = require("fs")

let inventory

fs.readFile("./data/inventories.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  inventory = JSON.parse(data)
})

router.get("/", function (req, res) {
  res.status(201).send(inventory)
})
module.exports = router
