import React, { useState } from "react";
import Auth from "../components/auth/index";
import { SIGN_IN } from "../constants/routes";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const SignupContainer = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = inputs;

  const history = useHistory();

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { name, email, password };
      await fetch("/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      toast.success("You have successfully created an account!");
      history.push("/signin");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Auth>
      <Auth.Title>Create Account</Auth.Title>
      <Auth.Form onSubmitForm={onSubmitForm}>
        <Auth.InputField
          type={"text"}
          placeholder={"Name"}
          value={name}
          name={"name"}
          onChange={(e) => onChange(e)}
        ></Auth.InputField>
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
        <Auth.SubmitButton>Register</Auth.SubmitButton>
      </Auth.Form>
      <Auth.Text>
        Already have an account?{" "}
        <Auth.TextLink to={SIGN_IN}>Sign In</Auth.TextLink>
      </Auth.Text>
    </Auth>
  );
};
