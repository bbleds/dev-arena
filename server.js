"use strict";

// --------- dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// init app
app.listen(PORT, () => {
  console.log(`connected on port: ${PORT}`);
});
