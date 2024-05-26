import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUserProfile from '../../hooks/profileHook';
import { useAuthContext } from '../../utils/authContext';
import getMyVenue from '../../utils/getVenueBookings';
import {
  PageContainer,
  PageContent,
} from '../index.styles';
import {
  UserInfo,
  Avatar,
  VenueManagerMark,
  UserDetails,
  Section,
  ListGrid,
  ListItem,
  ListImage,
  ListDetails,
  ListDates,
  ListWrap,
  ButtonContainer,
  EditBtn,
  DeleteBtn,
  UploadInput,
  UploadButton,
} from './index.styles';
import deleteVenue from '../../utils/deleteVenue';
import uploadAvatar from '../../utils/uploadAvatar';
import Message from '../../components/message';

const Profile = () => {
  const { profileData, loading, error, refetch } = useUserProfile();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [venuesWithBookings, setVenuesWithBookings] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [avatarSuccess, setAvatarSuccess] = useState(false);
  const [deletedVenueId, setDeletedVenueId] = useState(null);

  useEffect(() => {
    const fetchVenuesWithBookings = async () => {
      if (profileData && profileData.venues.length > 0) {
        const venuesData = await Promise.all(
          profileData.venues.map(async (venue) => {
            const venueData = await getMyVenue(venue.id);
            return {
              ...venue,
              bookings: venueData.bookings || [],
            };
          })
        );
        setVenuesWithBookings(venuesData);
      }
    };

    fetchVenuesWithBookings();
  }, [profileData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !profileData) {
    return <div>Error loading profile data.</div>;
  }

  const handleEdit = (id) => {
    navigate(`/editvenue/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this venue?');
    if (confirmed) {
      try {
        const response = await deleteVenue(id, user.accessToken, localStorage.getItem("apiKey"));
        if (response.ok) {
          setDeletedVenueId(id);
          setTimeout(() => {
            window.location.reload();
          }, 2000); 
        }
      } catch (error) {
        alert(`Failed to delete venue: ${error.message}`);
      }
    }
  };

  const handleAvatarChange = (e) => {
    setAvatarUrl(e.target.value);
  };

  const handleAvatarUpload = async () => {
    if (!avatarUrl) return;
    setUploadError('');
    try {
      await uploadAvatar(user.accessToken, localStorage.getItem("apiKey"), profileData.name, avatarUrl);
      setAvatarSuccess(true);
      setTimeout(() => {
        window.location.reload(); 
      }, 2000);
    } catch (error) {
      setUploadError(error.message);
    }
  };

  return (
    <PageContainer>
      <PageContent>
        <UserInfo>
          <Avatar>
            <img src={profileData.avatar?.url || 'default-avatar-url'} alt={profileData.avatar?.alt || 'User Avatar'} />
            {profileData.venueManager && <VenueManagerMark>VM</VenueManagerMark>}
          </Avatar>
          <UserDetails>
            <h1>{profileData.name}</h1>
            <p>{profileData.bio || 'No bio available'}</p>
          </UserDetails>
        </UserInfo>
        <UploadInput type="text" placeholder="New Avatar URL" onChange={handleAvatarChange} />
        {avatarSuccess ? (
          <Message message="Avatar updated successfully!" onTimeout={() => setAvatarSuccess(false)} />
        ) : (
          <UploadButton onClick={handleAvatarUpload}>Upload New Avatar</UploadButton>
        )}
        {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}

        <Section>
          <h2>My Bookings</h2>
          {profileData.bookings.length === 0 ? (
            <p>You have no bookings.</p>
          ) : (
            <ListGrid>
              {profileData.bookings.map((booking) => (
                <ListItem key={booking.id}>
                  <ListImage>
                    <img
                      src={booking.venue.media && booking.venue.media.length > 0 && booking.venue.media[0].url
                        ? booking.venue.media[0].url
                        : 'default-placeholder-url'}
                      alt={booking.venue.name}
                    />
                  </ListImage>
                  <ListDetails>
                    <h3>{booking.venue.name}</h3>
                    <p>
                      {booking.venue.location.address || "Unknown"}, {booking.venue.location.city || "Unknown"}, {booking.venue.location.country || "Unknown"}
                    </p>
                  </ListDetails>
                  <ListDates>
                    <p>From: {new Date(booking.dateFrom).toLocaleDateString()}</p>
                    <p>To: {new Date(booking.dateTo).toLocaleDateString()}</p>
                  </ListDates>
                </ListItem>
              ))}
            </ListGrid>
          )}
        </Section>

        {profileData.venueManager && (
          <Section>
            <h2>My Venues</h2>
            {venuesWithBookings.length === 0 ? (
              <p>You have no venues.</p>
            ) : (
              venuesWithBookings.map((venue) => (
                <ListWrap key={venue.id}>
                  <div>
                    {deletedVenueId === venue.id ? (
                      <Message message="Venue deleted successfully!" onTimeout={() => setDeletedVenueId(null)} />
                    ) : (
                      <>
                        <h3>{venue.name}</h3>
                        <ButtonContainer>
                          <EditBtn onClick={() => handleEdit(venue.id)}>Edit Venue</EditBtn>
                          <DeleteBtn onClick={() => handleDelete(venue.id)}>Delete Venue</DeleteBtn>
                        </ButtonContainer>
                        <ListGrid>
                          <ListItem>
                            <strong>Customer</strong>
                            <strong>Dates</strong>
                          </ListItem>
                          {venue.bookings.length === 0 ? (
                            <p>No bookings for this venue.</p>
                          ) : (
                            venue.bookings.map((booking) => (
                              <ListItem key={booking.id}>
                                <span>{booking.customer.name}</span>
                                <span>{new Date(booking.dateFrom).toLocaleDateString()} - {new Date(booking.dateTo).toLocaleDateString()}</span>
                              </ListItem>
                            ))
                          )}
                        </ListGrid>
                      </>
                    )}
                  </div>
                </ListWrap>
              ))
            )}
          </Section>
        )}
      </PageContent>
    </PageContainer>
  );
};

export default Profile;
