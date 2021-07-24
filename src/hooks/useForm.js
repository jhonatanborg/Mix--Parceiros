import React, { useState, useEffect } from "react";
import { validEmail } from "../utils";
export const useLoginFormState = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  let isEmailValid = false;
  let isPasswordValid = false;

  if (validEmail(email)) {
    isEmailValid = true;
  }
  if (password) {
    isPasswordValid = true;
  }
  return {
    email: {
      value: email,
      set: setEmail,
      valid: isEmailValid,
    },
    password: {
      value: password,
      set: setPassword,
      valid: isPasswordValid,
    },
    submit: {
      value: isEmailValid && isEmailValid,
      set: () => setSubmit(true),
    },
  };
};
