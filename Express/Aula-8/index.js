const { application, query } = require("express");
const express = require("express");
const app = express();
const port = 3000;

const route = require("./routes");
const path = require("path");
const {middlewareGlobal} = require("./src/middlewares/index");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname,"public")));

app.use(middlewareGlobal)
app.use(route);

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
