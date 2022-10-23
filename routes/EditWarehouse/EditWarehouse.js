const express = require("express")
const router = express.Router()
const fs = require("fs")
const checkBody = require("../helper")

let allWarehouses

fs.readFile("./data/warehouses.json", (err, data) => {
  allWarehouses = JSON.parse(data)
})

router.post("/", function (req, res) {
  const restWarehouses = allWarehouses.filter(
    (warehouses) => warehouses.id !== req.body.id
  )

  restWarehouses.push(req.body)

  fs.writeFile(
    "./data/warehouses.json",
    JSON.stringify(restWarehouses, null, 2),
    (err) => {
      res.send(err)
    }
  )
  res.status(201).send(restWarehouses)
})
module.exports = router
