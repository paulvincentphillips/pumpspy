import React, { useState } from "react";
import Header from "../components/header/index";
import logo from "../pump_spy.png";

export const HeaderContainer = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Header>
      <Header.Logo to={"/"} alt="pumpspy.ie" src={logo} />
      <Header.ButtonContainer>
        {!loggedIn ? (
          <>
            <Header.ButtonLink to={"/signin"}>Sign In</Header.ButtonLink>
            <Header.ButtonLink to={"/signup"}>Sign Up</Header.ButtonLink>
          </>
        ) : (
          <Header.ButtonLink>Sign Out</Header.ButtonLink>
        )}
      </Header.ButtonContainer>
    </Header>
  );
};
