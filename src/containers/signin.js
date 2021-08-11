import React from "react";
import Auth from "../components/auth/index";
import { SIGN_UP } from "../constants/routes";

export function SigninContainer({ children }) {
  return (
    <Auth>
      <Auth.Title>Welcome Back</Auth.Title>
      <Auth.Form>
        <Auth.InputField placeholder={"Email"}></Auth.InputField>
        <Auth.InputField placeholder={"Password"}></Auth.InputField>
        <Auth.SubmitButton>Login</Auth.SubmitButton>
      </Auth.Form>
      <p>
        {" "}
        Don't have an account? <Auth.TextLink to={SIGN_UP}>Sign Up</Auth.TextLink>
      </p>
    </Auth>
  );
}
