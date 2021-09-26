import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Container, Logo, ButtonContainer, ButtonLink, Button } from "./styles/header";

const Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
}

Header.Logo = ({ to, ...restProps }) => {
    return (
      <ReactRouterLink to={to}>
        <Logo {...restProps} />
      </ReactRouterLink>
    );
}

Header.ButtonContainer = ({ ...restProps}) => {
    return <ButtonContainer {...restProps}/>
};

Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Button = ({ signOut, children, ...restProps }) => {
  return <Button onClick={signOut} {...restProps}>{children}</Button>;
};

export default Header;
