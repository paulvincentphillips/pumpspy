import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 822px) {
    height: 84px;
    margin: 0;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 134px;
  margin-right: 40px;

  @media (max-width: 822px) {
    width: 108px;
    margin-right: 0px;
    margin-left: 13px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  @media (max-width: 822px) {
    flex-direction: column;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  background-color: #4cce59;
  color: #ffffff;
  text-align: center;
  width: 110px;
  height: fit-content;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 822px) {
    margin-right: 10px;
    height: 28px;
    font-size: 0.8em;
  }

  &.loginBtn {
    margin-left: 110px;
    margin-right: 50px;

    @media (max-width: 822px) {
      margin: 0;
      margin-bottom: 8px;
    }
  }

  &.headerBtn {
    margin-left: 110px;
    margin-right: 50px;
  }

  &:hover {
    background: #3aa345;
  }
`;

export const Button = styled.button`
  background-color: #4cce59;
  color: #ffffff;
  text-align: center;
  width: 110px;
  height: fit-content;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  margin-right: 10px;

  @media (max-width: 822px) {
    height: 28px;
    font-size: 0.8em;
  }

  &:hover {
    background: #3aa345;
  }
`;
