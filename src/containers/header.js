import React from "react";
import Header from "../components/header/index";
import logo from "../pump_spy.png";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Logo to={"/"} alt="pumpspy.ie" src={logo} />
      <Header.ButtonContainer>
        <Header.ButtonLink to={"/signin"}>Sign In</Header.ButtonLink>
        <Header.ButtonLink to={"/signup"}>Sign Up</Header.ButtonLink>
      </Header.ButtonContainer>
    </Header>
  );
}
