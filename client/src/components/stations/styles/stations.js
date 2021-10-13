import styled from "styled-components/macro";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  margin: auto;
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

  @media (max-width: 822px) {
    width: 350px;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 120px;

  @media (max-width: 822px) {
    width: 65px;
  }
`;

export const InfoContainer = styled.div`
  width: 350px;
  height: 136px;
  border-left: 2px solid black;
  border-right: 2px solid black;

  @media (max-width: 822px) {
    width: auto;
    height: auto;
  }
`;

export const StationInfo = styled.p`
  margin-left: 10px;

  @media (max-width: 822px) {
    font-size: 0.8em;
  }
`;

export const PriceBox = styled.div``;

export const PriceRowContainer = styled.div`
  @media (max-width: 822px) {
    display: flex;
  }
`;

export const Price = styled.p`
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
  width: 95px;

  @media (max-width: 822px) {
    font-size: 0.8em;
    margin-right: 5px;
    width: auto;
  }
`;

export const EditButton = styled.img`
  display: inline-block
  height: auto;
  width: 18px;
  cursor: pointer;
  margin-right: 7px;

  @media (max-width: 822px) {
    height: 15px;
    width: 15px;
    margin-top: 17px;
  }
`;
