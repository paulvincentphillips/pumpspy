import React, { useState, useEffect } from "react";
import StationGrid from "../components/stations/index";
import stationsData from "../fixtures/stations.json";

export const StationsContainer = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    stationsData.map((station) =>
      setStations((stations) => [...stations, station])
    );
  }, []);

  const updatePrice = (id, fuelType, price) => {
    let updatedStations = stations.map((station) =>
      station.id === id ? ({ ...station, [fuelType]: price }) : station
    );
    setStations(updatedStations);
  };

  return (
    <StationGrid>
      {stations.map((item) => (
        <StationGrid.StationRow key={item.id}>
          <StationGrid.Logo src={item.logo} alt={item.alt} />
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
                id={item.id}
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
                id={item.id}
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
