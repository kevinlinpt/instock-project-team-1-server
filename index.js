console.log("hello world");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const getAllWarehouses = require("./routes/getallwarehouses/getAllWarehouses");
//pull
const PORT = process.env.PORT || 8080;

//CORS middleware
app.use(cors());

//Middleware to give access to req.body
app.use(express.json());

//routing for endpoints
// app.get();
// app.post();
// app.put();
// app.delete();

app.use("/warehouses", getAllWarehouses);

app.listen(8080, () => {
  console.log("Server is up and running on port 8080! 🚀");
});
