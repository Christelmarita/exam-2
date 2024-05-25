import { userUrl } from './constants';

export default async function uploadAvatar(token, apiKey, profileName, avatarUrl) {
  console.log("Token:", token);
  console.log("API Key:", apiKey);
  console.log("Profile Name:", profileName);
  console.log("Avatar URL:", avatarUrl);

  const updatePayload = {
    avatar: {
      url: avatarUrl,
    },
  };

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-Noroff-API-Key': apiKey,
    },
    body: JSON.stringify(updatePayload),
  };

  try {
    const response = await fetch(`${userUrl}${profileName}`, options);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error Data:', errorData); // Log the error data
      throw new Error(errorData.message || 'Failed to update avatar');
    }
    return response.json();
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}
