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
  height: 150px;
  align-items: center;
  justify-content: center;
  width: 650px;
  border-top: 2px solid black;
  border-right: 2px solid black;
  border-left: 2px solid black;

  :last-child {
    border-bottom: 2px solid black;
    margin-bottom: 10px;
  }

  @media (max-width: 822px) {
    height: 100px;
    width: 335px;
  }
`;

export const LogoContainer = styled.div`
    width: 25%;
    display: flex;

    @media (max-width: 822px) {
      width: 25%;
    }
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 100px;
  margin: auto;

  @media (max-width: 822px) {
    width: 80px;
  }
`;

export const InfoContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 2px solid black;
  border-right: 2px solid black;

  @media (max-width: 822px) {
    width: 50%;
  }
`;

export const StationInfo = styled.p`
  margin-left: 10px;
  margin-bottom: 8px;
  margin-top: 8px;

  @media (max-width: 822px) {
    font-size: 0.6em;
  }
`;

export const PriceBox = styled.div`
  width: 25%;
  @media (max-width: 822px) {
    font-size: 0.6em;
    width: 25%;
  }
`;

export const PriceRowContainer = styled.div`

@media (max-width: 822px) {
  display: flex;
}
`;

export const Price = styled.p`
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
  width: 106px;

  @media (max-width: 822px) {
    font-size: 0.9em;
    margin-right: 10px;
    margin-left: 10px;
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
    width: 15px;
    height: 15px;
    margin-top: 10px;
    margin-right: 13px;
  }
`;
