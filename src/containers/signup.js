import React from "react";
import Auth from "../components/auth/index";
import { SIGN_IN } from "../constants/routes";

export function SignupContainer({ children }) {
  return (
    <Auth>
      <Auth.Title>Create Account</Auth.Title>
      <Auth.Form>
        <Auth.InputField placeholder={"First Name"}></Auth.InputField>
        <Auth.InputField placeholder={"Last Name"}></Auth.InputField>
        <Auth.InputField placeholder={"Email"}></Auth.InputField>
        <Auth.InputField placeholder={"Password"}></Auth.InputField>
        <Auth.SubmitButton>Register</Auth.SubmitButton>
      </Auth.Form>
      <p>
        Already have an account?{" "}
        <Auth.TextLink to={SIGN_IN}>Sign In</Auth.TextLink>
      </p>
    </Auth>
  );
}
