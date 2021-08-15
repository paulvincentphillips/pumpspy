import React, { useState } from "react";
import StationGrid from "../components/stations/index";
import stationsData from "../fixtures/stations.json";

export const StationsContainer = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const toggleModalHandler = () =>
    setDisplayModal((displayModal) => !displayModal);

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
            <StationGrid.PriceRow fuelPrice={item.petrol}>
              <StationGrid.Price>Petrol: </StationGrid.Price>
              <StationGrid.EditButton
                src={"images/icons/edit.png"}
                alt="edit-button"
                onClick={() => toggleModalHandler()}
              ></StationGrid.EditButton>
              {displayModal ? (
                <StationGrid.Modal close={toggleModalHandler} />
              ) : (
                <></>
              )}
            </StationGrid.PriceRow>
            <StationGrid.PriceRow fuelPrice={item.diesel}>
              <StationGrid.Price>Diesel: </StationGrid.Price>
              <StationGrid.EditButton
                src={"images/icons/edit.png"}
                alt="edit-button"
                onClick={() => toggleModalHandler()}
              />
              {displayModal ? (
                <StationGrid.Modal close={toggleModalHandler} />
              ) : (
                <></>
              )}
            </StationGrid.PriceRow>
          </StationGrid.PriceBox>
        </StationGrid.StationRow>
      ))}
    </StationGrid>
  );
};
