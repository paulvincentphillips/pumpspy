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
              <StationGrid.Modal price={item.petrol} />
            </StationGrid.PriceRow>
            <StationGrid.PriceRow>
              <StationGrid.Price fuelPrice={item.diesel}>
                Diesel:{" "}
              </StationGrid.Price>
              <StationGrid.EditButton
                src={"images/icons/edit.png"}
                alt="edit-button"
              />
              <StationGrid.Modal price={item.diesel} />
            </StationGrid.PriceRow>
          </StationGrid.PriceBox>
        </StationGrid.StationRow>
      ))}
    </StationGrid>
  );
};
