const express = require("express");
const app = express();
// const cors = require("cors");

let users;

const mongoClient = require("mongodb").MongoClient;
const mongoUrl = "mongodb://localhost:27017/";
global.db = "";
mongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, res) => {
  if (err) {
    console.log("Error in connection");
    return;
  }
  db = res.db("company");
  console.log("database is connected");
  let txtSearch;

  db.collection("users")
    .find()
    .toArray((err, res) => {
      if (err) {
        console.log("db error can not read");
        return;
      }
      console.log(res);

      users = res;
    });
});

app.get("/users", async (req, res) => {
  // let ajUsers = [
  //   { id: 1, name: "A", lastName: "AA" },
  //   { id: 2, name: "B", lastName: "BB" },
  //   { id: 3, name: "C", lastName: "CC" },
  // ];
  // const user = {
  //   name,
  //   lastName,
  // };
  res.header("Access-Control-Allow-Origin", "*");
  res.send(users);
});

app.listen(80, (err) => {
  if (err) {
    console.log("server can not listen");
    return;
  }
  console.log("server listening...");
});
