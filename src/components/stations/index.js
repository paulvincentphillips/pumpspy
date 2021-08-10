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
  EditButton
} from "./styles/stations";

export default function StationGrid({ ...restProps }) {
  return <GridContainer {...restProps} />;
}

StationGrid.StationRow = function ({ ...restProps }) {
  return <RowContainer {...restProps} />;
};

StationGrid.Logo = function ({ ...restProps }) {
  return <Logo {...restProps} />;
};

StationGrid.InfoBox = function ({ ...restProps }) {
  return <InfoContainer {...restProps} />;
};

StationGrid.StationInfo = function ({ children, ...restProps }) {
  return <StationInfo {...restProps}>{children}</StationInfo>;
};

StationGrid.PriceBox = function ({ children, ...restProps }) {
  return <PriceBox {...restProps}>{children}</PriceBox>;
};

StationGrid.PriceRow = function ({ ...restProps}) {
    return <PriceRowContainer {...restProps}/>
}

StationGrid.Price = function ({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};

StationGrid.EditButton = function ({ children, ...restProps }) {
    return <EditButton {...restProps}>{children}</EditButton>;
  };

