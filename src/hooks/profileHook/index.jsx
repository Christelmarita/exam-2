import { useState, useEffect, useContext, useCallback } from 'react';
import { AuthContext } from '../../utils/authContext';
import { userUrl } from '../../utils/constants';
import { getApiKey } from '../../utils/getApiKey';

/**
 * Custom hook to fetch and manage the user profile data.
 *
 * @function useUserProfile
 * @returns {Object}
 */
const useUserProfile = () => {
  const { user } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserProfile = useCallback(async () => {
    if (!user || !user.accessToken) {
      return;
    }

    setLoading(true);
    try {
      const apiKey = await getApiKey(user.accessToken);
      const response = await fetch(
        `${userUrl}${user.name}?_bookings=true&_venues=true`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
            'Content-Type': 'application/json',
            'X-Noroff-API-Key': apiKey,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProfileData(data.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  return { profileData, loading, error, refetch: fetchUserProfile };
};

export default useUserProfile;
