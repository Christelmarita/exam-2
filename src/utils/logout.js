/**
 * Logs out the user by removing the access token and user data from local storage.
 *
 * @function logOut
 */

export const logOut = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('user');
};
