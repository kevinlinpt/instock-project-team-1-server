console.log("hello world")
const express = require('express')
const app = express()
const cors = require("cors");
const dotenv = require("dotenv");
const newWarehouse = require('./routes/NewWarehouse/createNewWarehouse')
const warehouses = require('./data/warehouses.json')
dotenv.config();

//pull
const PORT = process.env.PORT || 8080;

//CORS middleware
app.use(cors());

//Middleware to give access to req.body
app.use(express.json());

//routing for endpoints
 app.get('/', (req,res)=>{
  res.send(warehouses)
 })
 app.use('/warehouse/new', newWarehouse)
// app.put()
// app.delete()


app.listen(8080, () => {
  console.log("Server is up and running on port 8080! 🚀")
})