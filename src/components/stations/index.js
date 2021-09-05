import React, { useState } from "react";
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

const DisplayModalContext = React.createContext();
export const ToggleModalConext = React.createContext();

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
  return (
    <ToggleModalConext.Consumer>
      {(toggleModalHandler) => {
        return <EditButton onClick={() => toggleModalHandler()} {...restProps} />;
      }}
    </ToggleModalConext.Consumer>
  );
};

StationGrid.Modal = function StationEditModal({ ...restProps }) {
  return (
    <DisplayModalContext.Consumer>
      {(displayModal) => {
        return displayModal ? <ModalContainer {...restProps} /> : <></>;
      }}
    </DisplayModalContext.Consumer>
  );
};

export default StationGrid;
