const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
//const PORT = process.env.PORT || 5000;
const PORT = 5000;

//middleware
app.use(cors());
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));
// }

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
