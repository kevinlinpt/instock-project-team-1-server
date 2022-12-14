
const express = require("express")
const app = express()

const cors = require("cors")
const dotenv = require("dotenv")
const fs = require("fs")
dotenv.config()

const newWarehouse = require("./routes/NewWarehouse/createNewWarehouse")
const getAllWarehouses = require("./routes/getallwarehouses/getAllWarehouses")
const getSingleInventoryItem = require("./routes/GetInventoryItem/GetInventoryItem")
const postInventoryItem = require("./routes/PostInventoryItemForWarehouse/PostInventoryItemForWarehouse")
const editWarehouse = require("./routes/EditWarehouse/EditWarehouse")
const getInventoryForWarehouse = require("./routes/GetInventoryForWarehouse/GetInventoryForWarehouse")
const deleteWarehouses = require("./routes/deleteWarehouse/deleteWarehouse")
const deleteInventoryItem = require("./routes/DeleteInventoryItem/DeleteInventoryItem")
const editInventoryItem = require("./routes/EditInventory/EditInventory")
const getSingleWarehouseData = require("./routes/GetSingleWarehouseData/GetSingleWarehouseData")
const getAllInventory = require("./routes/GetAllInventory/getAllInventory")


//pull
const PORT = process.env.PORT || 8080

//CORS middleware

app.use(cors())
app.use(express.static("data"))


//Middleware to give access to req.body
app.use(express.json())

//routing for endpoints


//this route post new warehouses to the warehouses.json file
app.use("/warehouse/new", newWarehouse)

app.use("/warehouses", getAllWarehouses)

app.use("/inventory-item", getSingleInventoryItem)

app.use("/inventory-item", postInventoryItem)

app.use("/inventory-item", editInventoryItem)

app.use("/edit-warehouse", editWarehouse)

app.use("/warehouse/new", newWarehouse)

app.use("/warehousedata", getSingleWarehouseData)

app.use("/inventory-item", getSingleInventoryItem)

app.use("/inventory-item", deleteInventoryItem)

app.use("/inventory", getInventoryForWarehouse)

app.use("/warehouses/delete", deleteWarehouses)

app.use("/inventories", getAllInventory)

app.listen(8080, () => {
  console.log("Server is up and running on port 8080! 🚀")
})

