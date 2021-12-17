import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));

const connectListen = () =>
  console.log("PORT:3030 연결됨 http://localhost:3030");
app.listen(3030, connectListen);
