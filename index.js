const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const redirectSSL = function (req, res, next) {
  if (req.headers["x-forwarded-proto"] === "https") {
    return next();
  }
  res.redirect("https://" + req.hostname + req.url);
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
  app.use(express.static(path.join(__dirname, "client/build")));
  //app.use(redirectNakedDomain);
  app.use(redirectSSL);
}

//ROUTES//

//stations routes
app.use("/stations", require("./routes/stations"));

//signup and login routes
app.use("/auth", require("./routes/auth"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
