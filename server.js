const express = require("express");
const app = express();
const port = 4000;
app.set("view engine", "ejs");
app.use(express.json());
app.use("/user", require("./Routes/user"));

app.listen(port, function () {
  console.log("The server is running, ");
});
