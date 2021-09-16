import React, { useState, useEffect, createContext, useContext } from "react";
import {
  Background,
  Container,
  Title,
  TextBox,
  ButtonContainer,
  ConfirmButton,
  CancelButton,
} from "./styles/modal";

const PriceContext = createContext();

const Modal = function ({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
};

Modal.Container = function ModalContainer({ fuelPrice, children }) {
  const [price, setPrice] = useState();

  useEffect(() => {
    setPrice(fuelPrice);
  }, [fuelPrice]);

  const setPriceHandler = (updatedPrice) => {
    setPrice(updatedPrice);
  };

  return (
    <PriceContext.Provider value={{ price, setPriceHandler }}>
      <Container>{children}</Container>
    </PriceContext.Provider>
  );
};

Modal.Title = function ModalTitle({ children }) {
  return <Title>{children}</Title>;
};

Modal.PriceTextBox = function ModalPriceTextBox({ children }) {
  const { price, setPriceHandler } = useContext(PriceContext);
  return (
    <TextBox
      defaultValue={price}
      maxLength="5"
      type="number"
      step={"0.1"}
      onChange={(e) => setPriceHandler(e.target.value)}
    >
      {children}
    </TextBox>
  );
};

Modal.ButtonContainer = function ModalButtonContainer({ children }) {
  return <ButtonContainer>{children}</ButtonContainer>;
};

Modal.ConfirmButton = function ModalConfirmButton({
  toggleModalHandler,
  updatePrice,
  fuelType,
  id,
  children
}) {
  const { price } = useContext(PriceContext);
  return (
    <ConfirmButton
      onClick={() => {
        toggleModalHandler();
        updatePrice(id, fuelType, price);
      }}
    >
      {children}
    </ConfirmButton>
  );
};

Modal.CancelButton = function ModalCancelButton({
  toggleModalHandler,
  children
}) {
  return (
    <CancelButton
      onClick={() => {
        toggleModalHandler();
      }}
    >
      {children}
    </CancelButton>
  );
};

export default Modal;
