const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

//provess.env.PORT
//provess.env.NORDE_ENV => production or undefined

//middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

//ROUTES//

//get all stations
app.get("/stations", async (req, res) => {
  try {
    const allStations = await pool.query("SELECT * FROM stations");
    res.json(allStations.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//update a station's petrol price
app.put("/stations/petrol/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    await pool.query(
      "UPDATE stations SET updated = CURRENT_TIMESTAMP WHERE station_id = $2",
      [price, id]
    );
    res.json("Station's Petrol price has been updated!");
  } catch (error) {
    console.error(error.message);
  }
});

//update a station's diesel price
app.put("/stations/diesel/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    await pool.query(
      "UPDATE stations SET diesel = $1, updated = CURRENT_TIMESTAMP WHERE station_id = $2",
      [price, id]
    );
    res.json("Station's Diesel price has been updated!");
  } catch (error) {
    console.error(error.message);
  }
});

app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "client/build.index.html"));
})

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
