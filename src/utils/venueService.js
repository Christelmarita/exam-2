import { venuesUrl } from './constants';

/**
 * Creates a new venue with the given data.
 *
 * @async
 * @function createVenue
 * @param {Object} venueData
 * @param {string} token
 * @returns {Promise<Object>}
 */

export const createVenue = async (venueData, token) => {
  const response = await fetch(venuesUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(venueData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create venue');
  }

  return await response.json();
};
