import React from "react";
import StationGrid from "../components/stations/index";
import stationsData from "../fixtures/stations.json";

export function StationsContainer({ children }) {
  return (
    <StationGrid>
      {stationsData.map((item) => (
        <StationGrid.StationRow key={item.id}>
          <StationGrid.Logo src={item.logo} alt={item.alt} />
          <StationGrid.StationInfo />
          {item.name}
          {item.address}
          {item.updated}
          {item.petrol}
          {item.diesel}
        </StationGrid.StationRow>
      ))}
    </StationGrid>
  );
}
