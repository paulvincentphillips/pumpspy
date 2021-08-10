import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Container, Logo, ButtonContainer, ButtonLink } from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
      <ReactRouterLink to={to}>
        <Logo {...restProps} />
      </ReactRouterLink>
    );
}

Header.ButtonContainer = function HeaderButtonContainer({ ...restProps}){
    return <ButtonContainer {...restProps}/>
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
