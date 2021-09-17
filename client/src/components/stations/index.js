import React, { useState, createContext, useContext } from "react";
import { ModalContainer } from "../../containers/modal";
import {
  GridContainer,
  RowContainer,
  Logo,
  InfoContainer,
  StationInfo,
  PriceBox,
  PriceRowContainer,
  Price,
  EditButton,
} from "./styles/stations";

const DisplayModalContext = createContext();
export const ToggleModalConext = createContext();

const StationGrid = ({ ...restProps }) => {
  return <GridContainer {...restProps} />;
};

StationGrid.StationRow = ({ ...restProps }) => {
  return <RowContainer {...restProps} />;
};

StationGrid.Logo = ({ ...restProps }) => {
  return <Logo {...restProps} />;
};

StationGrid.InfoBox = ({ ...restProps }) => {
  return <InfoContainer {...restProps} />;
};

StationGrid.StationInfo = ({ children, ...restProps }) => {
  return <StationInfo {...restProps}>{children}</StationInfo>;
};

StationGrid.PriceBox = ({ children, ...restProps }) => {
  return <PriceBox {...restProps}>{children}</PriceBox>;
};

StationGrid.PriceRow = function StationPriceRow({ ...restProps }) {
  const [displayModal, setDisplayModal] = useState(false);

  const toggleModalHandler = () => {
    setDisplayModal((displayModal) => !displayModal);
  };

  return (
    <DisplayModalContext.Provider value={displayModal}>
      <ToggleModalConext.Provider value={toggleModalHandler}>
        <PriceRowContainer {...restProps} />
      </ToggleModalConext.Provider>
    </DisplayModalContext.Provider>
  );
};

StationGrid.Price = function StationPrice({
  fuelPrice,
  children,
  ...restProps
}) {
  return (
    <Price {...restProps}>
      {children} {fuelPrice}
    </Price>
  );
};

StationGrid.EditButton = function StationEditButton({ ...restProps }) {
  const toggleModalHandler = useContext(ToggleModalConext);
  return <EditButton onClick={() => toggleModalHandler()} {...restProps} />;
};

StationGrid.Modal = function StationEditModal({ ...restProps }) {
  const displayModal = useContext(DisplayModalContext);
  return displayModal ? <ModalContainer {...restProps} /> : <></>;
};

export default StationGrid;
