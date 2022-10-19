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
  warehouses = JSON.parse(
    fs.readFile('./data/warehouses.json', (err) => {
      if (err) {
        console.log(err);
      }
    })
  );
  inventories = JSON.parse(
    fs.readFile('./data/inventories.json', (err) => {
      if (err) {
        console.log(err);
      }
    })
  );
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
    fs.writeFile('./data/warehouses.json', newWarehouses, (err) => {
      if (err) {
        console.log(err);
      }
    });
    fs.writeFile('./data/inventories.json', newInventories, (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.status(204).send();
  } else {
    res.status(404).send('Warehouse does not exist on DataBase');
  }
});

module.exports = deleteWarehouse;
