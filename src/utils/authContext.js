import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

/**
 * The AuthContext is used to provide authentication-related data and functions
 * to components within the AuthProvider.
 * @type {React.Context}
 */

export const AuthContext = createContext();

/**
 * The AuthProvider component provides authentication context to its children.
 * It manages user authentication state and provides login and logout functions.
 * @component
 * @param {Object}
 * @param {React.ReactNode}
 * @returns {JSX.Element}
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse stored user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  /**
   * Logs in the user and stores the user data in local storage.
   * @param {Object} userData
   */
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  /**
   * Logs out the user, clears the user data from state and local storage,
   * and navigates to the home page.
   * @param {Function} navigate
   */
  const logout = (navigate) => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Custom hook to use the AuthContext.
 * @returns {Object}
 */
export const useAuthContext = () => {
  return useContext(AuthContext);
};
