import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../authForm";
import { register as registerUserService } from "../../../utils/authService";

const initialRegisterState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isVenueManager: false,
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    const { name, email, password, confirmPassword, isVenueManager } = formData;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await registerUserService(name, email, password, isVenueManager);
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthForm
      initialState={initialRegisterState}
      handleSubmit={handleRegister}
      buttonText="Register"
    />
  );
};

export default RegisterForm;
