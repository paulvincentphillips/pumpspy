import React from "react";
import {
  Container,
  Form,
  Title,
  InputField,
  SubmitButton,
  Text,
  TextLink,
} from "./styles/auth";

const Auth = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
}

Auth.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Auth.Form = ({ onSubmitForm, children, ...restProps }) => {
  return <Form noValidate onSubmit={onSubmitForm} {...restProps}>{children}</Form>;
};

Auth.InputField = ({ type, children, ...restProps }) => {
  return <InputField type={type} {...restProps}>{children}</InputField>;
};

Auth.SubmitButton = ({ children, ...restProps }) => {
  return <SubmitButton {...restProps}>{children}</SubmitButton>;
};

Auth.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Auth.TextLink = ({ children, ...restProps }) => {
  return <TextLink {...restProps}>{children}</TextLink>;
};

export default Auth;