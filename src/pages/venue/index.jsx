import React, { useState, useEffect } from 'react';
import { PageContainer, PageContent } from '../index.styles';
import {
  VenueFormContainer,
  VenueOwner,
  VenueDescription,
  VenueIcons,
  VenueTitle,
  VenueLeft,
  VenueRight,
  VenueContent,
} from './index.styles';
import getVenues from '../../utils/getVenues';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader';
import Icons from '../../images';
import VenueCarousel from '../../components/carousel';
import BookingForm from '../../components/forms/bookingForm';

/**
 * Venue component displays the details of a specific venue.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function Venue() {
  const [venue, setVenue] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getVenues().then((data) => {
      data = data.filter((venue) => venue.id === id);
      setVenue(data[0]);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <PageContainer>
      <PageContent>
        <VenueContent>
          <VenueLeft>
            <VenueCarousel media={venue.media} />
          </VenueLeft>
          <VenueRight>
            <VenueTitle>
              <h1>{venue.name}</h1>
              <p>
                <Icons.Location /> <b>{venue.location.address || 'Unknown'}</b>,{' '}
                {venue.location.zip || 'Unknown'}{' '}
                {venue.location.city || 'Unknown'},{' '}
                {venue.location.country || 'Unknown'}
              </p>
              <p>
                <Icons.Bed /> {venue.maxGuests || 'Unknown'}
              </p>
              <p>
                <Icons.Rating /> {venue.rating}/5
              </p>
            </VenueTitle>
            <VenueDescription>
              <p>{venue.description}</p>
            </VenueDescription>
            <h2>Ameneties</h2>
            <VenueIcons>
              {venue.meta.wifi && <Icons.Wifi />}
              {venue.meta.parking && <Icons.Parking />}
              {venue.meta.pets && <Icons.Pets />}
              {venue.meta.breakfast && <Icons.Breakfast />}
            </VenueIcons>
            <VenueOwner>
              <div>
                {venue.owner.avatar.url ? (
                  <img src={venue.owner.avatar.url} alt="Owner avatar" />
                ) : (
                  <Icons.PlaceholderAvatar />
                )}
                <p>
                  <b>{venue.owner.name || 'Unknown'}</b> hosts this venue
                </p>
              </div>
            </VenueOwner>
          </VenueRight>
        </VenueContent>
        <VenueFormContainer>
          <BookingForm venue={venue} />
        </VenueFormContainer>
      </PageContent>
    </PageContainer>
  );
}
