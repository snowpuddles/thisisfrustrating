import http from "http";
import express from "express";
//import geckos from "@geckos.io/server";

const app = express();
const server = http.createServer(app);
// const io = geckos();
// io.addServer(server);
// io.onConnection((channel) => {
//   console.log("haksaklflkasd");
// });

server.listen(3000);
console.log("This is great! We are listening", "http://localhost:3000");

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
