import { baseUrl } from './constants';

/**
 * Generates a new API key.
 *
 * @async
 * @function getApiKey
 * @param {string} accessToken
 * @returns {Promise<string>}
 */

export async function getApiKey(accessToken) {
  try {
    const response = await fetch(`${baseUrl}auth/create-api-key`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ name: 'My API Key' }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error creating API key:', errorData);
      throw new Error('Failed to create API key');
    }

    const data = await response.json();
    localStorage.setItem('apiKey', data.data.key);
    return data.data.key;
  } catch (error) {
    console.error('Error in getApiKey:', error);
    throw error;
  }
}
