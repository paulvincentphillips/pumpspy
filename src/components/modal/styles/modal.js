import styled from "styled-components/macro";

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
  width: 55%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`

`;

export const TextBox = styled.textarea`
  width: 250px;
  resize: none;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Button = styled.div`
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

  &:hover {
    background: #3aa345;
  }
`;

