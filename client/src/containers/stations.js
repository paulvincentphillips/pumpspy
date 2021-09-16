import React, { useState, useEffect } from "react";
import StationGrid from "../components/stations/index";

export const StationsContainer = () => {
  const [stations, setStations] = useState([]);

  const getStations = async () => {
    try {
      const response = await fetch("http://localhost:5000/stations");
      const jsonData = await response.json();

      setStations(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const updatePrice = async (id, fuelType, price) => {
    try {
      const body = { price };
      await fetch(`http://localhost:5000/stations/${fuelType}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getStations();
  }, []);

  return (
    <StationGrid>
      {stations.map((item) => (
        <StationGrid.StationRow key={item.station_id}>
          <StationGrid.Logo
            src={`images/logos/${item.brand.toLowerCase()}.png`}
            alt={item.alt}
          />
          <StationGrid.InfoBox>
            <StationGrid.StationInfo>{item.name}</StationGrid.StationInfo>
            <StationGrid.StationInfo>{item.address}</StationGrid.StationInfo>
            <StationGrid.StationInfo>
              Last Updated: {item.updated}
            </StationGrid.StationInfo>
          </StationGrid.InfoBox>
          <StationGrid.PriceBox>
            <StationGrid.PriceRow>
              <StationGrid.Price fuelPrice={item.petrol}>
                Petrol:{" "}
              </StationGrid.Price>
              <StationGrid.EditButton
                src={"images/icons/edit.png"}
                alt="edit-button"
              />
              <StationGrid.Modal
                id={item.station_id}
                price={item.petrol}
                fuelType={"petrol"}
                updatePrice={updatePrice}
              />
            </StationGrid.PriceRow>
            <StationGrid.PriceRow>
              <StationGrid.Price fuelPrice={item.diesel}>
                Diesel:{" "}
              </StationGrid.Price>
              <StationGrid.EditButton
                src={"images/icons/edit.png"}
                alt="edit-button"
              />
              <StationGrid.Modal
                id={item.station_id}
                price={item.diesel}
                fuelType={"diesel"}
                updatePrice={updatePrice}
              />
            </StationGrid.PriceRow>
          </StationGrid.PriceBox>
        </StationGrid.StationRow>
      ))}
    </StationGrid>
  );
};
