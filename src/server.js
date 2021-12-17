import http from "http";
import WebSocket from "ws";
import express from "express";

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

function wssConnention(socket) {
  console.log(socket);
}

wss.on("connection", wssConnention);

server.listen(3030, connectListen);
