const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const itemsCategorie = require('./routes/itemsRoutes')
app.use("/api",itemsCategorie);
module.exports = app;
