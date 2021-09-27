import React from "react";
import { HeaderContainer } from "../containers/header";
import { SignUpContainer } from "../containers/signup";

const SignUp = ({setAuth}) => {
  return (
    <>
      <HeaderContainer />
      <SignUpContainer />
    </>
  );
}

export default SignUp;
