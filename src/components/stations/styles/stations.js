import styled from "styled-components/macro";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  width: 625px;
  border-top: 2px solid black;
  border-right: 2px solid black;
  border-left: 2px solid black;

  :last-child {
      border-bottom: 2px solid black;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 100px;
  margin-right: 10px;
`;

export const InfoContainer = styled.div`
  width: 350px;
  border-left: 2px solid black;
  border-right: 2px solid black;
`;

export const StationInfo = styled.p`
margin-left: 10px;`;

export const PriceBox = styled.div``;

export const PriceRowContainer = styled.div``;

export const Price = styled.p`
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
  width: 95px;
`;

export const EditButton = styled.button`
  display: inline-block;
  height: auto;
  width: 18px;
  cursor: pointer;
`;
