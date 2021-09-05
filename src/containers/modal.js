import React from "react";
import Modal from "../components/modal/index";
import { ToggleModalConext } from "../components/stations/index";

export const ModalContainer = ({ price, ...restProps }) => {
  return (
    <ToggleModalConext.Consumer>
      {(toggleModalHandler) => {
        return (
          <Modal>
            <Modal.Container>
              <Modal.Title>Edit Price {price}</Modal.Title>
              <Modal.PriceTextBox></Modal.PriceTextBox>
              <Modal.ButtonContainer>
                <Modal.Button toggleModalHandler={toggleModalHandler}>Confirm</Modal.Button> 
                <Modal.Button toggleModalHandler={toggleModalHandler}>Cancel</Modal.Button> 
              </Modal.ButtonContainer>
            </Modal.Container>
          </Modal>
        );
      }}
    </ToggleModalConext.Consumer>
  );
};
