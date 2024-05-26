import React, { useState, useEffect } from 'react';
import getVenues from '../../utils/getVenues';
import Loader from '../loader';
import { Text, CardBody, Card, Image, ErrorMessage } from './index.styles';
import Icons from '../../images';
import { Link } from 'react-router-dom';

/**
 * VenueCard component displays a list of venue cards based on the search query.
 *
 * @component
 * @param {Object} props
 * @param {string} props.searchQuery
 * @returns {JSX.Element}
 */
export default function VenueCard({ searchQuery }) {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const data = await getVenues();
        setVenues(data);
      } catch (error) {
        setError('Cannot find any venues. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

  const filteredVenues = venues.filter(
    (venue) =>
      venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <>
      {filteredVenues.map(({ id, price, media, name, location }) => (
        <Link key={id} to={`/venue/${id}`}>
          <Card>
            <Image>
              {media?.[0]?.url ? (
                <img src={media[0].url} alt={name} />
              ) : (
                <Icons.PlaceholderImage />
              )}
            </Image>
            <CardBody>
              <Text>
                <h3>{name}</h3>
                <p>
                  {location.city || 'Unknown'}, {location.country || 'Unknown'}
                </p>
                <h4>{price} NOK / night</h4>
              </Text>
            </CardBody>
          </Card>
        </Link>
      ))}
    </>
  );
}
