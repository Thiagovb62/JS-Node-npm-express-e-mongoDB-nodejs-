require("dotenv").config();

const { application, query } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log("conectei no banco de dados");
    app.emit("appStarted");
  })
  .catch((e) => console.log(e));
const port = 3000;

const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");

const route = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/index");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session ({
  secret:'lcklslkalkadaldslçlsdlaçepowéç',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave:false,
  saveUninitialized: false,
  cookie:{
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly:true
  }
  
})

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(middlewareGlobal);
app.use(route);


app.on("appStarted", () => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
