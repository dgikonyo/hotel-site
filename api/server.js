// imports
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');
const GuestRoutes = require("./routes/users.routes");
dotenv.config();

const port = process.env.PORT;
// database connection

const uri = process.env.DB_URI;

// Middleware to parse JSON bodies
app.use(express.json());

// import routes
app.use("/api/v1/guests", GuestRoutes);

// connect to MongoDB
mongoose
  .connect(uri)
  .then(() =>
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    )
  )
  .catch((err) => console.log(err));

// defining routes
app.listen(port, (req, res, next) => {
	console.log(`Server up and running in port:`, port);
});