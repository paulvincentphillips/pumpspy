import React from "react";
import Modal from "../components/modal/index";

export const ModalContainer = ({price, close}) => {
  return (
    <Modal>
      <Modal.Container>
        <Modal.Title>Edit Price {price}</Modal.Title>
        <Modal.PriceTextBox></Modal.PriceTextBox>
        <Modal.ButtonContainer>
          <Modal.Button close={close}>Confirm</Modal.Button>
          <Modal.Button close={close}>Cancel</Modal.Button>
        </Modal.ButtonContainer> 
      </Modal.Container>
    </Modal>
  );
};
