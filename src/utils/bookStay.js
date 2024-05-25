import { getApiKey } from './getApiKey';
import { bookingsUrl } from './constants';

export async function bookStay({ dateFrom, dateTo, guests, venueId, token }) {
  let apiKey = localStorage.getItem("apiKey");

  if (!apiKey) {
    try {
      apiKey = await getApiKey(token);
      localStorage.setItem("apiKey", apiKey);
    } catch (error) {
      console.error("Failed to create API key:", error);
      throw new Error("Failed to create API key");
    }
  }

  const bookingPayload = {
    dateFrom,
    dateTo,
    guests,
    venueId,
  };

  console.log("Booking request payload:", bookingPayload);
  console.log("Authorization token:", token);
  console.log("API key:", apiKey);

  try {
    const response = await fetch(`${bookingsUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": apiKey,
      },
      body: JSON.stringify(bookingPayload),
    });

    const data = await response.json();
    console.log("Booking API response:", data);

    if (!response.ok) {
      throw new Error(data.message || "Failed to make the booking");
    }

    return data;
  } catch (error) {
    console.error("Error in bookStay:", error);
    throw new Error("Failed to make the booking");
  }
}
