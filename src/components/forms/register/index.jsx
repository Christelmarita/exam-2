import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../authForm";
import { register as registerUserService } from "../../../utils/authService";
import Message from "../../message";

const initialRegisterState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isVenueManager: false,
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleRegister = async (formData) => {
    const { name, email, password, confirmPassword, isVenueManager } = formData;

    console.log("Form Data:", formData); // Log form data

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await registerUserService(name, email, password, isVenueManager);
      setMessage({ success: true, message: "Registration successful! Redirecting to login..." });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Registration error:", error); // Log the error
      setError(error.message);
    }
  };

  return (
    <>
      {message && message.success ? (
        <Message message={message.message} onTimeout={() => {}} type="success" />
      ) : (
        <AuthForm
          initialState={initialRegisterState}
          handleSubmit={handleRegister}
          buttonText="Register"
        />
      )}
      {error && <Message message={error} onTimeout={() => setError(null)} type="error" />}
    </>
  );
};

export default RegisterForm;
