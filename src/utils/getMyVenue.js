import { venuesUrl } from './constants';

const getMyVenue = async (id) => {
  const response = await fetch(`${venuesUrl}/${id}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Error response:', errorData);
    throw new Error(errorData.message || 'Failed to fetch venue bookings');
  }

  const result = await response.json();
  return result;
};

export default getMyVenue;
