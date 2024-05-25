import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../utils/authContext";
import AuthForm from "../authForm";
import { login as loginUserService } from "../../../utils/authService";

const initialLoginState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { login: loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleLogin = async (formData) => {
    const { email, password } = formData;
    try {
      const userData = await loginUserService(email, password);
      loginUser(userData);

      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthForm
      initialState={initialLoginState}
      handleSubmit={handleLogin}
      buttonText="Log in"
    />
  );
};

export default LoginForm;
