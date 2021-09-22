const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

//ROUTES//

//stations routes
app.use("/stations", require("./routes/stations"));

//register and login routes
app.use("/auth", require("./routes/auth"));

//dashboard route
app.use("/dashboard", require("./routes/dashboard"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build.index.html"));
});

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
