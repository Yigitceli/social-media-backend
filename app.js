const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const pinRouter = require("./routes/pin");
const mongoose = require("mongoose");

const app = express();

// view engine setup


app.use(logger("dev"));
app.use(cors({ origin: "https://social-media-frontend-yigitceli.vercel.app", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", indexRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : err;

  // render the error page
  res.status(err.status || 500);
});

app.listen(process.env.PORT, async () => {
  console.log("Server listening at 5000");
  mongoose
    .connect(process.env.MONGODB_CONNECTION)
    .then((info) => {
      console.log("Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;
