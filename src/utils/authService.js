import { registerUrl, loginUrl } from "../utils/constants";

export const register = async (name, email, password, isVenueManager) => {
  const response = await fetch(registerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, venueManager: isVenueManager }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Registration failed");
  }

  const result = await response.json();
  return result.data;
};

export const login = async (email, password) => {
  const response = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed");
  }

  const result = await response.json();
  return result.data; 
};
