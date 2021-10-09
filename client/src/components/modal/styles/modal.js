import styled from "styled-components/macro";
import NumberFormat from "react-number-format";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 0;
`;

export const Container = styled.div`
  position: fixed;
  background: #6e7269;
  width: 500px;
  height: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  padding-top: 1em;
`;

export const TextBox = styled(NumberFormat)`
  width: 170px;
  resize: none;
  margin-bottom: 20px;
  text-align: center;
  font-size: 3em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ConfirmButton = styled.div`
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
  margin-right: 0.8em;
  background-color: #4cce59;

  &:hover {
    background: #3aa345;
  }
`;

export const CancelButton = styled.div`
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
  margin-left: 0.8em;
  background-color: #ef0707;

  &:hover {
    background: #d10606;
  }
`;
