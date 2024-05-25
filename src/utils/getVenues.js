// src/utils/getVenues.js

import { venuesUrl, queryOwner, queryBooking } from './constants';

export default async function getVenues() {
  const url = `${venuesUrl}/?${queryOwner}=true&${queryBooking}=true`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const results = await response.json();
    const data = results.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
