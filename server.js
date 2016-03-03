"use strict";

// --------- dependencies
const express = require("express");
const app = express();
// Init naitive node server
const server = require("http").createServer(app);
// pass server into socketio
const io = require("socket.io")(server);

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// init app
server.listen(PORT, () => {
  console.log(`connected on port: ${PORT}`);
});

io.on('connection', () => {
  console.log('socket connected');

});
