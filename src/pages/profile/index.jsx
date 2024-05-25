import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUserProfile from '../../hooks/profileHook';
import { useAuthContext } from "../../utils/authContext";
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
  ButtonContainer,
  FormBtn,
  DeleteBtn,
} from './index.styles'; 
import deleteVenue from '../../utils/deleteVenue';

const Profile = () => {
  const { profileData, loading, error } = useUserProfile();
  const { user } = useAuthContext();
  const navigate = useNavigate();

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
          alert('Venue deleted successfully');
          window.location.reload();
        }
      } catch (error) {
        alert(`Failed to delete venue: ${error.message}`);
      }
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

        <Section>
          <h2>My Bookings</h2>
          {profileData.bookings.length === 0 ? (
            <p>You have no bookings.</p>
          ) : (
            <ListGrid>
              {profileData.bookings.map((booking) => (
                <ListItem key={booking.id}>
                  <ListImage
                    src={booking.venue.media && booking.venue.media.length > 0 && booking.venue.media[0].url
                      ? booking.venue.media[0].url
                      : 'default-placeholder-url'} 
                    alt={booking.venue.name}
                  />
                  <ListDetails>
                    <h3>{booking.venue.name}</h3>
                    <p>{booking.venue.location.address || "Unknown"}, {booking.venue.location.city || "Unknown"}, {booking.venue.location.country || "Unknown"}</p>
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
            {profileData.venues.length === 0 ? (
              <p>You have no venues.</p>
            ) : (
              <ListGrid>
                {profileData.venues.map((venue) => (
                  <ListItem key={venue.id}>
                    <ListImage
                      src={venue.media && venue.media.length > 0 && venue.media[0].url
                        ? venue.media[0].url
                        : 'default-placeholder-url'} 
                      alt={venue.name}
                    />
                    <ListDetails>
                      <h3>{venue.name}</h3>
                      <p>{venue.location.address || "Unknown"}, {venue.location.city || "Unknown"}, {venue.location.country || "Unknown"}</p>
                    </ListDetails>
                    <ButtonContainer>
                      <FormBtn onClick={() => handleEdit(venue.id)}>Edit Venue</FormBtn>
                      <DeleteBtn onClick={() => handleDelete(venue.id)}>Delete Venue</DeleteBtn>
                    </ButtonContainer>
                  </ListItem>
                ))}
              </ListGrid>
            )}
          </Section>
        )}
      </PageContent>
    </PageContainer>
  );
};

export default Profile;
