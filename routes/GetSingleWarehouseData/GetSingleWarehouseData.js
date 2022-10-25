const express = require("express");
const router = express.Router();
const fs = require("fs");

let warehouses;
fs.readFile('./data/warehouses.json','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
     else{
        try{
            warehouses = JSON.parse(data)
        } catch(e){
            console.log(e)
        }
     }
})
router.get('/:warehouseId', (req,res)=>{
    const id = req.params.warehouseId
    if(!id){
        res.status(400).send("Please provide the appropriate warehouse ID")
    }
    const singleWarehouse = warehouses.find(w=> w.id === id)
    res.send(singleWarehouse)
})
module.exports = router