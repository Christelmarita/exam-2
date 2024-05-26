import { userUrl } from './constants';

/**
 * Updates the user's avatar by uploading a new avatar URL.
 *
 * @async
 * @function uploadAvatar
 * @param {string} token
 * @param {string} apiKey
 * @param {string} profileName
 * @param {string} avatarUrl
 * @returns {Promise<Object>}
 */

export default async function uploadAvatar(
  token,
  apiKey,
  profileName,
  avatarUrl
) {
  const updatePayload = {
    avatar: {
      url: avatarUrl,
    },
  };

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': apiKey,
    },
    body: JSON.stringify(updatePayload),
  };

  try {
    const response = await fetch(`${userUrl}${profileName}`, options);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error Data:', errorData);
      throw new Error(errorData.message || 'Failed to update avatar');
    }
    return response.json();
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}
