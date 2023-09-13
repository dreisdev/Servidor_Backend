const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/router");

const conn = require("./db/conn");

conn();

app.use(cors());

app.use(express.json());

app.use("/api", routes);

app.listen(3000, function () {
    console.log("Servidor Online");

});
