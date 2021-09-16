import React, { useContext } from "react";
import Modal from "../components/modal/index";
import { ToggleModalConext } from "../components/stations/index";

export const ModalContainer = ({
  price,
  fuelType,
  updatePrice,
  id,
  ...restProps
}) => {
  const toggleModalHandler = useContext(ToggleModalConext);
  return (
    <Modal>
      <Modal.Container fuelPrice={price}>
        <Modal.Title>Edit Price {price}</Modal.Title>
        <Modal.PriceTextBox></Modal.PriceTextBox>
        <Modal.ButtonContainer>
          <Modal.ConfirmButton
            toggleModalHandler={toggleModalHandler}
            updatePrice={updatePrice}
            id={id}
            fuelType={fuelType}
          >
            Confirm
          </Modal.ConfirmButton>
          <Modal.CancelButton toggleModalHandler={toggleModalHandler}> 
            Cancel
          </Modal.CancelButton>
        </Modal.ButtonContainer>
      </Modal.Container>
    </Modal>
  );
};
