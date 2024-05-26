import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../utils/authContext';
import AuthForm from '../authForm';
import { login as loginUserService } from '../../../utils/authService';
import Message from '../../message';

const initialLoginState = {
  email: '',
  password: '',
};

/**
 * LoginForm component handles the login form and authentication process.
 *
 * @component
 * @returns {JSX.Element}
 */
const LoginForm = () => {
  const { login: loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async (formData) => {
    const { email, password } = formData;
    try {
      const userData = await loginUserService(email, password);
      loginUser(userData);

      setMessage({ success: true, message: 'Login successful!' });

      setTimeout(() => {
        const redirectTo = location.state?.from || '/';
        navigate(redirectTo);
      }, 1000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {message && message.success ? (
        <Message
          message={message.message}
          onTimeout={() => {}}
          type="success"
        />
      ) : (
        <AuthForm
          initialState={initialLoginState}
          handleSubmit={handleLogin}
          buttonText="Log in"
        />
      )}
      {error && (
        <Message
          message={error}
          onTimeout={() => setError(null)}
          type="error"
        />
      )}
    </>
  );
};

export default LoginForm;
