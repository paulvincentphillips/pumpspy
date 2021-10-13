import React, { useState } from "react";
import Auth from "../components/auth/index";
import { SIGN_UP } from "../constants/routes";
import { toast } from "react-toastify";

export const LogInContainer = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password };
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);

        setAuth(true);
        toast.success("You have successfully logged in!");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Auth>
      <Auth.Title>Welcome Back</Auth.Title>
      <Auth.Form onSubmitForm={onSubmitForm}>
        <Auth.InputField
          type={"email"}
          placeholder={"Email"}
          value={email}
          name={"email"}
          onChange={(e) => onChange(e)}
        ></Auth.InputField>
        <Auth.InputField
          type={"password"}
          placeholder={"Password"}
          value={password}
          name={"password"}
          onChange={(e) => onChange(e)}
        ></Auth.InputField>
        <Auth.SubmitButton>Login</Auth.SubmitButton>
      </Auth.Form>
      <Auth.Text>
        {" "}
        Don't have an account?{" "}
        <Auth.TextLink to={SIGN_UP}>Sign Up</Auth.TextLink>
      </Auth.Text>
    </Auth>
  );
};
