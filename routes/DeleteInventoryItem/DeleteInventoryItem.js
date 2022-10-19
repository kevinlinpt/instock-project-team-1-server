const express = require("express")
const router = express.Router()
const inventoryItems = require('../../data/inventories.json')

router.delete('/',function(req,res){
  if(req.body.id){
    const inventoryItem = inventoryItems.find(
      (item) => item.id === req.body.id
      );
      res.send(inventoryItem)
    } else{
      return res.status(400).send('The inventory ID you have provided is invalid. Please try again.')
    }
})

module.exports = router