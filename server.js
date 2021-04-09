const express = require("express"); //express 도 결국은 모듈이기에, 모듈을 로드한다
const app = express(); //Creates an Express application
const server = require("http").Server(app); //http는 node.js의 built-in 모듈

// Route
app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

server.listen(3030);
