const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const users = require("./routes/parlamentares");

const app = express();

const corsOption = {
  origin: "http://localhost:4200",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["authorization"]
};

app.use(cors(corsOption));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/api", (req, res) => res.send("API works!!!"));


// Use Routes
app.use("/api/parlamentares", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`API running on port ${port}`));