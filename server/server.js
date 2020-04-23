const express = require("express");
const app = express();
// const cors = require("cors");

app.get("/users", (req, res) => {
  let ajUsers = [
    { id: 1, name: "A", lastName: "AA" },
    { id: 2, name: "B", lastName: "BB" },
    { id: 3, name: "C", lastName: "CC" },
  ];
  res.header("Access-Control-Allow-Origin", "*");
  res.send(ajUsers);
});

app.listen(80, (err) => {
  if (err) {
    console.log("server can not listen");
    return;
  }
  console.log("server listening...");
});
