import React, { useState, createContext, useContext } from "react";
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

const PriceContext = createContext();

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

StationGrid.PriceRow = function StationPriceRow({ fuelPrice, ...restProps }) {
  const [price, setPrice] = useState(fuelPrice);
  return (
    <PriceContext.Provider value={{ price, setPrice }}>
      <PriceRowContainer {...restProps} />
    </PriceContext.Provider>
  );
};

StationGrid.Price = function StationPrice({
  fuelPrice,
  children,
  ...restProps
}) {
  const { price } = useContext(PriceContext);

  return (
    <Price {...restProps}>
      {children} {price}
    </Price>
  );
};

StationGrid.EditButton = function StationEditButton({
  children,
  ...restProps
}) {
  const { price, setPrice } = useContext(PriceContext);

  return <EditButton onClick={() => setPrice((price) => price + 1)} {...restProps}>{children}</EditButton>;
};

export default StationGrid;
