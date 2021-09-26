import React from "react";
import { HeaderContainer } from "../containers/header";
import { SignupContainer } from "../containers/signup";

const Signup = ({setAuth}) => {
  return (
    <>
      <HeaderContainer />
      <SignupContainer setAuth={setAuth} />
    </>
  );
}

export default Signup;
