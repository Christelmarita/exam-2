import { venuesUrl } from './constants';

const getMyVenue = async (id) => {
  console.log('getMyVenue called with id:', id); // Log the function call with the venue id
  const response = await fetch(`${venuesUrl}/${id}`, { // Ensure the correct endpoint
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Error response:', errorData); // Log error response
    throw new Error(errorData.message || 'Failed to fetch venue bookings');
  }

  const result = await response.json();
  console.log('Fetched venue data:', result); // Log fetched venue data
  return result;
};

export default getMyVenue;
