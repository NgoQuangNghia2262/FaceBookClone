var express = require("express");
var app = express();
var cors = require("cors");
var bodyparser = require("body-parser");

var routerProfile = require("./Routers/UserProfileRouter");
var routerFriendShip = require("./Routers/FriendShipRouter");
var routerPost = require("./Routers/PostRouter");

app.use(cors());
app.use(bodyparser.json({ limit: "50mb" }));

app.use("/Profile", routerProfile);
app.use("/friendship", routerFriendShip);
app.use("/data/api/post", routerPost);
app.get("/test", (req, res) => {
  const jsResult = JSON.stringify("Hello World");
  res.send(jsResult);
});
app.listen(8000, () => {
  console.log("server is running !!!");
});
