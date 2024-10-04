// imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");
const GuestRoutes = require("./routes/users.routes");
const RoomRoutes = require("./routes/room.routes");
dotenv.config();
// test
const port = process.env.PORT;

// Middleware to parse JSON bodies
app.use(express.json());

// import routes
app.use("/api/v1/guests", GuestRoutes);
app.use("/api/v1/rooms", RoomRoutes);

// connect to MongoDB
// database connection

const db_user_name = process.env.DB_USER_NAME;
const db_password = process.env.DB_PASSWORD;
const db_cluster_name = process.env.DB_CLUSTER_NAME;
const db_app_name = process.env.DB_APP_NAME;
const uri = `mongodb+srv://${db_user_name}:${db_password}@${db_cluster_name}.dyirmr2.mongodb.net/?retryWrites=true&w=majority&appName=${db_app_name}`;
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
