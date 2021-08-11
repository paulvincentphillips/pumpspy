import React from "react";
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

StationGrid.PriceRow = ({ ...restProps }) => {
  return <PriceRowContainer {...restProps} />;
};

StationGrid.Price = ({ children, ...restProps }) => {
  return <Price {...restProps}>{children}</Price>;
};

StationGrid.EditButton = ({ children, ...restProps }) => {
  return <EditButton {...restProps}>{children}</EditButton>;
};

export default StationGrid;
