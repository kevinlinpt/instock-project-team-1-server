const express = require('express');
const deleteWarehouse = express.Router();
const fs = require('fs');

//define variables
let warehouses = [];
let inventories = [];

//middleware to fetch data from JSON file
deleteWarehouse.use((req, res, next) => {
  warehouses = [];
  inventories = [];
  //loads new data on to the arrays
  warehouses = JSON.parse(fs.readFileSync('./data/warehouses.json'));
  inventories = JSON.parse(fs.readFileSync('./data/inventories.json'));
  next();
});

//DELETE request
deleteWarehouse.delete('/:location', (req, res, next) => {
  let warehouseToDelete = req.params.location;
  //checks if requested warehouse exists on database
  let warehouseCheck = warehouses.filter(
    (warehouse) => warehouse.name.toLowerCase() === warehouseToDelete
  );
  if (warehouseCheck[0]) {
    let newWarehouses = warehouses.filter(
      (warehouse) => warehouse.name.toLowerCase() !== warehouseToDelete
    );
    newWarehouses = JSON.stringify(newWarehouses);
    let newInventories = inventories.filter(
      (inventory) => inventory.warehouseName.toLowerCase() !== warehouseToDelete
    );
    newInventories = JSON.stringify(newInventories);
    fs.writeFileSync('./data/warehouses.json', newWarehouses);
    fs.writeFileSync('./data/inventories.json', newInventories);
    res.status(204).send();
  } else {
    res.status(404).send('Warehouse does not exist on DataBase');
  }
});

module.exports = deleteWarehouse;
