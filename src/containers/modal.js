import React from "react";
import Modal from "../components/modal/index";

export const ModalContainer = ({fuelPrice, close}) => {
  return (
    <Modal>
      <Modal.Container>
        <Modal.Title>Edit Price</Modal.Title>
        <Modal.PriceTextBox fuelPrice={fuelPrice}></Modal.PriceTextBox>
        <Modal.ButtonContainer>
          <Modal.Button>Confirm</Modal.Button>
          <Modal.Button close={close}>Cancel</Modal.Button>
        </Modal.ButtonContainer> 
      </Modal.Container>
    </Modal>
  );
};
