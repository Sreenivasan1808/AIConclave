const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser')



const app = express();

dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

const schoolRoutes = require("./routes/schoolRoutes");
const collegeRoutes = require("./routes/collegeRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/school", schoolRoutes);
app.use("/college", collegeRoutes);
app.use("/admin", adminRoutes);