import { getApiKey } from './getApiKey';
import { bookingsUrl } from './constants';

/**
 * Books a stay at a venue.
 *
 * @async
 * @function bookStay
 * @param {Object} params -
 * @param {string} params.dateFrom
 * @param {string} params.dateTo
 * @param {number} params.guests
 * @param {string} params.venueId
 * @param {string} params.token
 * @returns {Promise<Object>}
 */
export async function bookStay({ dateFrom, dateTo, guests, venueId, token }) {
  let apiKey = localStorage.getItem('apiKey');

  if (!apiKey) {
    try {
      apiKey = await getApiKey(token);
      localStorage.setItem('apiKey', apiKey);
    } catch (error) {
      console.error('Failed to create API key:', error);
      throw new Error('Failed to create API key');
    }
  }

  const bookingPayload = {
    dateFrom,
    dateTo,
    guests,
    venueId,
  };

  try {
    const response = await fetch(`${bookingsUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-Noroff-API-Key': apiKey,
      },
      body: JSON.stringify(bookingPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to make the booking');
    }

    return data;
  } catch (error) {
    console.error('Error in bookStay:', error);
    throw new Error('Failed to make the booking');
  }
}
