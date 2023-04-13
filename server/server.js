const fs = require("fs");
const path = require("path");
const express = require("express");
const router = require("express").Router();
const app = express();
const port = 5000;

data = new Date().toString();
try {
  fs.appendFileSync("current-date-time.txt", `${data}\n`);

  console.log("file written succsfully");
} catch (error) {
  console.log(error);
}
app.get("/read", readText);

function readText(req, res) {
  res.end(
    fs.readFile("current-date-time.txt", "utf8", (err, data) => {
      if (err) console.log(err);
      else {
        console.log(data);
        res.send({ message: "Done!!" });
      }
    })
  );
}
app.listen(port, () => {
  console.log(`Server Listening to port ${port}`);
});
