const express = require('express')
const router = express.Router()
const fs = require('fs')
let inventoryItems;
fs.readFile('./data/inventories.json', 'utf-8',(err,data)=>{
  inventoryItems = JSON.parse(data)
})
router.get('/:itemId',function(req,res){
  if(req.params.itemId){

    const singleItem = inventoryItems.find(
      (item) => item.id === req.params.itemId
      );
      res.send(singleItem)
    } else{
      return res.status(400).send('The item is not found pls check the id of the item')
    }
})

module.exports = router