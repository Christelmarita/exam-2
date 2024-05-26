import { venuesUrl } from "./constants";

export const createVenue = async (venueData, token) => {
  const response = await fetch(venuesUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(venueData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create venue");
  }

  return await response.json();
};
