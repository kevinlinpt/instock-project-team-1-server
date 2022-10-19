const express = require('express');
const deleteWarehouse = express.Router();
const fs = require('fs');

//define variables
let warehouses = [];
let inventories = [];
fs.readFile('./data/warehouses.json', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  try {
    warehouses = JSON.parse(data);
  } catch (error) {
    console.log(error, 'try catch');
  }
});
fs.readFile('./data/inventories.json', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  try {
    inventories = JSON.parse(data);
  } catch (error) {
    console.log(error, 'try catch');
  }
});

//DELETE request
deleteWarehouse.delete('/:location', (req, res, next) => {
  let warehouseToDelete = req.params.location;
  console.log(warehouses);
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
