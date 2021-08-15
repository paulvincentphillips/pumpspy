import React from 'react';
import { Background, Container, Title, ButtonContainer, TextBox, Button } from "./styles/modal";

const Modal = function({children, ...restProps}){
    return <Background {...restProps}>{children}</Background>
}

Modal.Container = function ModalContainer({children, ...restProps}){
    return <Container>{children}</Container>
}

Modal.Title = function ModalTitle({children, ...restProps}){
    return <Title>{children}</Title>
}

Modal.ButtonContainer = function ModalButtonContainer({children, ...restProps}){
    return <ButtonContainer>{children}</ButtonContainer>
}

Modal.PriceTextBox = function ModalPriceTextBox({fuelPrice, children, ...restProps}){
    return <TextBox value={fuelPrice}>{children}</TextBox>
}

Modal.Button = function ModalButton({close, children, ...restProps}){
    return <Button onClick={close}>{children}</Button>
}

export default Modal;