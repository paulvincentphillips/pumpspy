import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Container, Form, Title, InputField, SubmitButton, TextLink} from "./styles/auth";

export default function Auth({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Auth.Title = function({ children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}

Auth.Form = function({ children, ...restProps}) {
  return <Form {...restProps}>{children}</Form>
}

Auth.InputField = function({children, ...restProps}){
  return <InputField {...restProps}>{children}</InputField>
}

Auth.SubmitButton = function({children, ...restProps}){
  return <SubmitButton {...restProps}>{children}</SubmitButton>
}

Auth.TextLink = function({children, ...restProps}){
  return <TextLink {...restProps}>{children}</TextLink>
}
