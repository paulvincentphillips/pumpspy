import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 620px;
  margin: auto;
`;

export const Title = styled.h2``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputField = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  width: 250px;
`;

export const SubmitButton = styled.button`
  background-color: #4cce59;
  color: #ffffff;
  text-align: center;
  width: -webkit-fill-available;
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

export const Text = styled.p``;

export const TextLink = styled(ReactRouterLink)`
  color: #4cce59;
`;
