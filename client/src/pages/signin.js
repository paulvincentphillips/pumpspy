import React from "react";
import { HeaderContainer } from "../containers/header";
import { SigninContainer } from "../containers/signin";

const Signin = ({setAuth}) => {
  return (
    <>
      <HeaderContainer />
      <SigninContainer setAuth={setAuth} />
    </>
  );
};

export default Signin;
