import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: auto;
  width: 134px;
  margin-right: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const ButtonLink = styled(ReactRouterLink)`
  background-color: #4cce59;
  color: #ffffff;
  text-align: center;
  width: 90px;
  height: fit-content;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #3aa345;
  }
`;
