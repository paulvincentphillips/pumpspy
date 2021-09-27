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
  const formatPrice = (price) => {
    price = price + "";
    if (price.indexOf(".") === -1) {
      return price + ".0";
    }
    return price;
  };
  return (
    <Modal>
      <Modal.Container fuelPrice={price}>
        <Modal.Title>Edit Price {formatPrice(price)}</Modal.Title>
        <Modal.PriceTextBox formatPrice={formatPrice}/>
        <Modal.ButtonContainer>
          <Modal.ConfirmButton
            toggleModalHandler={toggleModalHandler}
            updatePrice={updatePrice}
            id={id}
            fuelType={fuelType}
            formatPrice={formatPrice}
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
