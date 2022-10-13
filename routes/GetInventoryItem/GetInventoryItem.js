const express = require('express')
const router = express.Router()
const inventoryItems = require('../../data/inventories.json')

router.get('/',function(req,res){
    const singleItem = inventoryItems.find(
      (item) => item.id === req.body.id
    );
    res.send(singleItem)
})

module.exports = router