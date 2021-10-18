import React, { useState, createContext, useContext } from "react";
import { ModalContainer } from "../../containers/modal";
import {
  GridContainer,
  RowContainer,
  LogoContainer,
  Logo,
  InfoContainer,
  StationInfo,
  PriceBox,
  PriceRowContainer,
  Price,
  EditButton,
} from "./styles/stations";
import { toast } from "react-toastify";

const DisplayModalContext = createContext();
export const ToggleModalConext = createContext();

const StationGrid = ({ ...restProps }) => {
  return <GridContainer {...restProps} />;
};

StationGrid.StationRow = ({ ...restProps }) => {
  return <RowContainer {...restProps} />;
};

StationGrid.LogoContainer = ({ ...restProps }) => {
  return <LogoContainer {...restProps} />;
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
  const formatPrice = (fuelPrice) => {
    fuelPrice = fuelPrice + "";
    if (fuelPrice.indexOf(".") === -1) {
      return fuelPrice + ".0";
    }
    return fuelPrice;
  };
  return (
    <Price {...restProps}>
      {children} {formatPrice(fuelPrice)}
    </Price>
  );
};

StationGrid.EditButton = function StationEditButton({
  isAuthenticated,
  ...restProps
}) {
  const toggleModalHandler = useContext(ToggleModalConext);
  return (
    <EditButton
      onClick={() => {
        isAuthenticated ? toggleModalHandler() : toast.error("Please login to edit prices");;
      }}
      {...restProps}
    />
  );
};

StationGrid.Modal = function StationEditModal({ ...restProps }) {
  const displayModal = useContext(DisplayModalContext);
  return displayModal ? <ModalContainer {...restProps} /> : <></>;
};

export default StationGrid;
