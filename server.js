const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const connectDB = require("./config/db");
const cors = require("cors");

//routers
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
mongoose.set("strictQuery", false);
connectDB();
const quiz = require("./router/router");
app.use(express.json());
app.use("/api/v1", quiz);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
