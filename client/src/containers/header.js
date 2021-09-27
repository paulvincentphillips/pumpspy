import React from "react";
import Header from "../components/header/index";
import { toast } from "react-toastify";

export const HeaderContainer = ({setAuth, isAuthenticated}) => {

  const signOut = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("You have successfully logged out!");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Header>
      <Header.Logo to={"/"} alt="pumpspy.ie" src={"images/icons/pump_spy.png"} />
      <Header.ButtonContainer>
        {!isAuthenticated ? (
          <>
            <Header.ButtonLink to={"/signin"}>Sign In</Header.ButtonLink>
            <Header.ButtonLink to={"/signup"}>Sign Up</Header.ButtonLink>
          </>
        ) : (
          <Header.Button onClick={signOut}>Sign Out</Header.Button>
        )}
      </Header.ButtonContainer>
    </Header>
  );
};
