import styled from "styled-components/macro";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  justify-content: center;
`;

export const RowContainer = styled.div`
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  width: 600px;
  border: 2px black solid;
`;

export const Logo = styled.img`
  height: auto;
  width: 100px;
  margin-right: 10px;
`;

export const InfoContainer = styled.div`
  width: 350px;
`;

export const StationInfo = styled.p``;

export const PriceBox = styled.div``;

export const PriceRowContainer = styled.div``;

export const Price = styled.p`
  display: inline-block;
  margin-right: 10px;
  width: 95px;
`;

export const EditButton = styled.img`
  display: inline-block
  height: auto;
  width: 18px;
  cursor: pointer;
`;
