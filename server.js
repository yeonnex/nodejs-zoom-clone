// require 는 모듈을 import 하는 것과 비슷한 역할을 한다.
"use strict";
const express = require("express"); //express 도 결국은 모듈이기에, 모듈을 로드한다
const { config } = require("process");
const app = express(); //Creates an Express application
const server = require("http").Server(app); //http는 node.js의 built-in 모듈
const { v4: uuidv4 } = require("uuid");
const io = require("socket.io")(server);
app.set("view engine", "ejs");
app.use(express.static("public")); // public 폴더에서 참조 가능하게 함
// Route
app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});
app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

io.on("connection", (socket) => {
    socket.on("join-room", (roomId) => {
    socket.join(roomId);
    socket.broadcast.emit('user-connected');
  });
});

server.listen(3030);
