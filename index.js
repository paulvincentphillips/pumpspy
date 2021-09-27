const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;

//provess.env.PORT
//provess.env.NORDE_ENV => production or undefined

//middleware
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "client/build")));

const forceSsl = function (req, res, next) {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(["https://", req.get("Host"), req.url].join(""));
  }
  return next();
};

const redirectNakedDomain = function (req, res, next) {
  var host = req.header("host");
  if (host.match(/\bwww\.pumpspy.ie\b/i)) {
    next();
  } else {
    res.redirect(301, "https://www.pumpspy.ie" + req.url);
  }
};

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
  app.use(redirectNakedDomain);
  app.use(forceSsl);
}

//ROUTES//

//stations routes
app.use("/stations", require("./routes/stations"));

//register and login routes
app.use("/auth", require("./routes/auth"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build.index.html"));
});

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
