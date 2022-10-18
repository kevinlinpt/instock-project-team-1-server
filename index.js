const express = require('express');
const app = express();

const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const newWarehouse = require('./routes/NewWarehouse/createNewWarehouse');

dotenv.config();
const getAllWarehouses = require('./routes/getallwarehouses/getAllWarehouses');
const getSingleInventoryItem = require('./routes/GetInventoryItem/GetInventoryItem');
const deleteWarehouses = require('./routes/deleteWarehouse/deleteWarehouse');
//pull
const PORT = process.env.PORT || 8080;

//CORS middleware
app.use(cors());
app.use(express.static('data'));
//Middleware to give access to req.body
app.use(express.json());

//routing for endpoints

//this route post new warehouses to the warehouses.json file
app.use('/warehouse/new', newWarehouse);
// app.put()
// app.delete()

// app.get();
// app.post();
// app.put();
// app.delete();

app.use('/warehouses', getAllWarehouses);

app.use('/inventory-item', getSingleInventoryItem);

app.use('/warehouses/delete', deleteWarehouses);

app.listen(8080, () => {
  console.log('Server is up and running on port 8080! 🚀');
});
