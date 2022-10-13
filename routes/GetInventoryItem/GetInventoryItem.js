const express = require('express')
const router = express.Router()
const inventoryItems = require('../../data/inventories.json')

router.get('/',function(req,res){
  if(req.body.id){

    const singleItem = inventoryItems.find(
      (item) => item.id === req.body.id
      );
      res.send(singleItem)
    } else{
      return res.status(400).send('The item is not found pls check the id of the item')
    }
})

module.exports = router