const express = require("express");
const router = express.Router();
const pool = require("../db");

//get all stations
router.get("/", async (req, res) => {
  try {
    const allStations = await pool.query("SELECT * FROM stations");
    res.json(allStations.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get stations for specific County & Town
router.get("/:county/:town", async (req, res) => {
  try {
    const { county, town } = req.params;
    const filteredStations = await pool.query(
      "SELECT * FROM stations WHERE address LIKE '%' || $1 || ', Co. ' || $2 || '%'",
      [town, county]
    );
    res.json(filteredStations.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get stations for specific County
router.get("/:county", async (req, res) => {
  try {
    const { county } = req.params;
    const filteredStations = await pool.query(
      "SELECT * FROM stations WHERE address LIKE '%Co. ' || $1 || '%'",
      [county]
    );
    res.json(filteredStations.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//update a station's petrol price
router.put("/petrol/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    await pool.query(
      "UPDATE stations SET petrol = $1, updated = CURRENT_TIMESTAMP WHERE station_id = $2",
      [price, id]
    );
    res.json("Station's Petrol price has been updated!");
  } catch (error) {
    console.error(error.message);
  }
});

//update a station's diesel price
router.put("/diesel/:id", async (req, res) => {
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

module.exports = router;
