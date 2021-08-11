import React from "react";
import StationGrid from "../components/stations/index";
import stationsData from "../fixtures/stations.json";

export const StationsContainer = () => {

  return (
    <StationGrid>
      {stationsData.map((item) => (
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
              <StationGrid.Price>Petrol: {item.petrol}</StationGrid.Price>
              <StationGrid.EditButton
                src={"images/icons/edit.png"}
                alt="edit-button"
              />
            </StationGrid.PriceRow>
            <StationGrid.PriceRow>
              <StationGrid.Price>Diesel: {item.diesel}</StationGrid.Price>
              <StationGrid.EditButton
                src={"images/icons/edit.png"}
                alt="edit-button"
              />
            </StationGrid.PriceRow>
          </StationGrid.PriceBox>
        </StationGrid.StationRow>
      ))}
    </StationGrid>
  );
};
