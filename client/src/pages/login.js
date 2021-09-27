import React from "react";
import { HeaderContainer } from "../containers/header";
import { LogInContainer } from "../containers/login";

const LogIn = ({setAuth}) => {
  return (
    <>
      <HeaderContainer />
      <LogInContainer setAuth={setAuth} />
    </>
  );
};

export default LogIn;
