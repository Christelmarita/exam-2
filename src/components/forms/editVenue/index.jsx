import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Form,
  FormItem,
  FormItemCheckbox,
  FormBtnContainer,
  FormGridContainer,
  FormColumn,
} from '../index.styles';
import FormBtn from '../../buttons/formBtn';
import { venuesUrl } from '../../../utils/constants';
import useFetch from '../../../hooks/fetchHook';
import Message from '../../message';

/**
 * EditVenueForm component handles the form for editing a venue.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function EditVenueForm() {
  const { venueId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
    maxGuests: 0,
    amenities: {
      parking: false,
      breakfast: false,
      wifi: false,
      pets: false,
    },
    address: '',
    city: '',
    zip: '',
    country: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const { performFetch } = useFetch(`${venuesUrl}/${venueId}`);

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${venuesUrl}/${venueId}`);
        if (response.ok) {
          const venueResponse = await response.json();
          const venue = venueResponse.data;

          setFormData({
            name: venue.name,
            description: venue.description,
            imageUrl:
              venue.media && venue.media.length > 0 ? venue.media[0].url : '',
            price: venue.price,
            maxGuests: venue.maxGuests,
            amenities: venue.meta,
            address: venue.location.address,
            city: venue.location.city,
            zip: venue.location.zip,
            country: venue.location.country,
          });
        } else {
          console.error('Failed to fetch venue');
        }
      } catch (error) {
        console.error('Error fetching venue:', error);
      } finally {
        setLoading(false);
      }
    };

    if (venueId) {
      fetchVenue();
    }
  }, [venueId]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        amenities: {
          ...prev.amenities,
          [id]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const venueData = {
      name: formData.name,
      description: formData.description,
      media: [{ url: formData.imageUrl, alt: 'Venue image' }],
      price: Number(formData.price),
      maxGuests: Number(formData.maxGuests),
      meta: formData.amenities,
      location: {
        address: formData.address,
        city: formData.city,
        zip: formData.zip,
        country: formData.country,
      },
    };

    try {
      await performFetch({
        method: 'PUT',
        body: JSON.stringify(venueData),
      });
      setMessage({ success: true, message: 'Venue updated successfully!' });
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setMessage({ success: false, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Edit Venue</h1>
      <Form onSubmit={handleSubmit}>
        <FormGridContainer>
          <FormColumn>
            <h2>Where</h2>
            <FormItem>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormItem>
            <FormItem>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={handleChange}
              />
            </FormItem>
          </FormColumn>
          <FormColumn>
            <h2>About</h2>
            <FormItem>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </FormItem>
            <FormItem>
              <label htmlFor="imageUrl">Image Url</label>
              <input
                type="text"
                id="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </FormItem>
            <FormItem>
              <label htmlFor="maxGuests">Max guests</label>
              <input
                type="number"
                id="maxGuests"
                value={formData.maxGuests}
                onChange={handleChange}
                required
              />
            </FormItem>
          </FormColumn>
        </FormGridContainer>
        <h2>Amenities</h2>
        <FormGridContainer>
          <FormItemCheckbox>
            <input
              type="checkbox"
              id="parking"
              checked={formData.amenities.parking}
              onChange={handleChange}
            />
            <label htmlFor="parking">Parking</label>
          </FormItemCheckbox>
          <FormItemCheckbox>
            <input
              type="checkbox"
              id="breakfast"
              checked={formData.amenities.breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </FormItemCheckbox>
          <FormItemCheckbox>
            <input
              type="checkbox"
              id="wifi"
              checked={formData.amenities.wifi}
              onChange={handleChange}
            />
            <label htmlFor="wifi">Wifi</label>
          </FormItemCheckbox>
          <FormItemCheckbox>
            <input
              type="checkbox"
              id="pets"
              checked={formData.amenities.pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </FormItemCheckbox>
        </FormGridContainer>
        <FormBtnContainer>
          {message ? (
            <Message
              message={message.message}
              onTimeout={() => setMessage(null)}
              type={message.success ? 'success' : 'error'}
            />
          ) : (
            <FormBtn text="Update Venue" type="submit" />
          )}
        </FormBtnContainer>
      </Form>
    </div>
  );
}
