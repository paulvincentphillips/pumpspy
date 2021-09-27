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
import { toast } from "react-toastify";

const PriceContext = createContext();

const Modal = function ({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
};

Modal.Container = function ModalContainer({ fuelPrice, children }) {
  const [initialPrice, setInitialPrice] = useState();
  const [updatedPrice, setUpdatedPrice] = useState();

  useEffect(() => {
    setInitialPrice(fuelPrice);
    setUpdatedPrice(fuelPrice);
  }, [fuelPrice]);

  const setPriceHandler = (inputPrice) => {
    setUpdatedPrice(inputPrice);
  };

  return (
    <PriceContext.Provider
      value={{ initialPrice, setPriceHandler, updatedPrice }}
    >
      <Container>{children}</Container>
    </PriceContext.Provider>
  );
};

Modal.Title = function ModalTitle({ children }) {
  return <Title>{children}</Title>;
};

Modal.PriceTextBox = function ModalPriceTextBox({ formatPrice, children }) {
  const { setPriceHandler, updatedPrice } = useContext(PriceContext);
  return (
    <TextBox
      value={formatPrice(updatedPrice)}
      maxLength="5"
      type="text"
      allowNegative={false}
      decimalScale={1}
      onChange={(e) => {
        setPriceHandler(e.target.value);
      }}
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
  children,
}) {
  const { initialPrice, updatedPrice } = useContext(PriceContext);
  const regExp = /\d{3}\.\d{1}/;
  return (
    <ConfirmButton
      onClick={() => {
        if (regExp.test(updatedPrice) && updatedPrice !== initialPrice) {
          toggleModalHandler();
          updatePrice(id, fuelType, updatedPrice);
        }
        if (regExp.test(updatedPrice) === false) {
          toast.error("Invalid price format!");
        }
        if (updatedPrice === initialPrice) {
          toast.warn("You have not edited the price!");
        }
      }}
    >
      {children}
    </ConfirmButton>
  );
};

Modal.CancelButton = function ModalCancelButton({
  toggleModalHandler,
  children,
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
