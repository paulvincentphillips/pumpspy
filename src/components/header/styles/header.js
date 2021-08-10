import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 134px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const ButtonLink = styled(ReachRouterLink)`
  background-color: #4cce59;
  width: 90px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;

  &:hover {
    background: #3aa345;
  }
`;
