import { registerUrl, loginUrl } from '../utils/constants';

/**
 * Registers a new user.
 * @async
 * @function register
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @param {boolean} isVenueManager
 * @returns {Promise<Object>}
 */
export const register = async (name, email, password, isVenueManager) => {
  const response = await fetch(registerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
      venueManager: isVenueManager,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Registration failed');
  }

  const result = await response.json();
  return result.data;
};

/**
 * Logs in existing user.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>}
 */
export const login = async (email, password) => {
  const response = await fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }

  const result = await response.json();
  return result.data;
};
