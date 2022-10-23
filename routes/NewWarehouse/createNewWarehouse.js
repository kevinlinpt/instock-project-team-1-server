const express = require("express")
const router = express.Router()
const fs = require("fs")
const validator = require("node-email-validation")
const checkValidBody = require("../helper")
let savedWarehouses
fs.readFile("./data/warehouses.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err)
  }
  try {
    savedWarehouses = JSON.parse(data)
  } catch (error) {
    console.log(error, "try catch")
  }
})

router.post("/", function (req, res) {
  const isValidBody = checkValidBody(req)
  const validPhone = req.body.contact.phone.split("").length === 10
  const validEmail = validator.is_email_valid(req.body.contact.email)

  if (isValidBody && validPhone && validEmail) {
    savedWarehouses.push(req.body)

    fs.writeFile(
      "./data/warehouses.json",
      JSON.stringify(savedWarehouses, null, 2),
      (err) => {
        if (err) {
          console.log(err)
        }
      }
    )
    return res.status(201).send(savedWarehouses)
  } else if (!validator.is_email_valid(req.body.contact.email)) {
    return res.status(400).send(`Please provide the valid email addresss`)
  } else if (!validPhone) {
    return res.status(400).send("please provide a valid phone number")
  } else {
    return res.status(400).send("Please provide the appropriate details")
  }
})

module.exports = router
