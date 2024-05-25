// src/components/venueCard/index.jsx

import React, { useState, useEffect } from "react";
import getVenues from "../../utils/getVenues";
import Loader from "../loader";
import { Text, CardBody, Card, Image } from "./index.styles";
import Icons from "../../images";
import { Link } from "react-router-dom";

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
        setError("Failed to fetch venues");
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
    return <div>{error}</div>;
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
                  {location.city || "Unknown"}, {location.country || "Unknown"}
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
