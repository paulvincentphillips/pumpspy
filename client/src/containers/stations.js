import React, { useState, useEffect } from "react";
import StationGrid from "../components/stations/index";

export const StationsContainer = ({isAuthenticated}) => {
  const [stations, setStations] = useState([]);

  const getStations = async () => {
    try {
      const response = await fetch("/api/stations");
      const jsonData = await response.json();

      setStations(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const updatePrice = (id, fuelType, price) => {
    let updatedStations = stations.map((station) =>
      station.station_id === id ? { ...station, [fuelType]: price } : station
    );
    setStations(updatedStations);
    updateDatabasePrice(id, fuelType, price);
  };

  const updateDatabasePrice = async (id, fuelType, price) => {
    try {
      const body = { price };
      await fetch(`/api/stations/${fuelType}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const formatDate = (date) => {
    date = date.replace(/T.*/, "");
    return date.split("-").reverse().join("-");
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
              Last Updated: {formatDate(item.updated)}
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
                isAuthenticated={isAuthenticated}
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
                isAuthenticated={isAuthenticated}
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
