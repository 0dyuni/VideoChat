import http from "http";
import WebSocket from "ws";
import express from "express";
import { Socket } from "dgram";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const connectListen = () =>
  console.log("PORT:3030 연결됨 http://localhost:3030");

// http server
const server = http.createServer(app);
// websocat server
const wss = new WebSocket.Server({ server });

const sockets = [];

// socket === 연결된 브라우저
wss.on("connection", (socket) => {
  sockets.push(socket);
  console.log("브라우져와 연결. ✅");
  socket.on("close", () => {
    console.log("브라우져와 연결이 끊김.❌");
  });
  socket.on("message", (message) => {
    sockets.forEach((aSocket) => aSocket.send(message.toString()));
  });
});

server.listen(3030, connectListen);
