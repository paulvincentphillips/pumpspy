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
  const [initalPrice, setInitalPrice] = useState();
  const [updatedPrice, setUpdatedPrice] = useState();
  const regExp = /\d{3}\.\d{1}/;

  useEffect(() => {
    setInitalPrice(fuelPrice);
    setUpdatedPrice(fuelPrice);
  }, [fuelPrice]);

  const setPriceHandler = (inputPrice) => {
    setUpdatedPrice(inputPrice);
  };

  return (
    <PriceContext.Provider
      value={{ initalPrice, setPriceHandler, updatedPrice }}
    >
      <Container>{children}</Container>
    </PriceContext.Provider>
  );
};

Modal.Title = function ModalTitle({ children }) {
  return <Title>{children}</Title>;
};

Modal.PriceTextBox = function ModalPriceTextBox({ children }) {
  const { setPriceHandler, updatedPrice } = useContext(PriceContext);
  const formatPrice = (price) => {
    price = price + "";
    if (price.indexOf(".") === -1) {
      return price + ".0";
    }
    return price;
  };
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
  const { initalPrice, updatedPrice } = useContext(PriceContext);
  const regExp = /\d{3}\.\d{1}/;
  return (
    <ConfirmButton
      onClick={() => {
        if (regExp.test(updatedPrice) && updatedPrice !== initalPrice) {
          toggleModalHandler();
          updatePrice(id, fuelType, updatedPrice);
        }
        if (regExp.test(updatedPrice) === false) {
          toast.error("Invalid price format!");
        }
        if (updatedPrice === initalPrice) {
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
