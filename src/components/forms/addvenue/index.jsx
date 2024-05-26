import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  FormItem,
  FormItemCheckbox,
  FormBtnContainer,
  FormGridContainer,
  FormColumn,
} from '../index.styles';
import FormBtn from '../../buttons/formBtn';
import useForm from '../../../hooks/formHook';
import useFetch from '../../../hooks/fetchHook';
import { createVenueUrl } from '../../../utils/constants';
import Message from '../../message';

const initialState = {
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
};

/**
 * AddVenueForm component handles the form for adding a new venue.
 *
 * @component
 * @returns {JSX.Element}
 */
const AddVenueForm = () => {
  const { performFetch} = useFetch(createVenueUrl);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
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
        country: formData.country,
      },
    };

    try {
      await performFetch({
        method: 'POST',
        body: JSON.stringify(venueData),
      });
      setShowSuccess(true);
    } catch (error) {
      setShowError(true);
    }
  };

  const { formData, handleChange, handleSubmit } = useForm(
    initialState,
    onSubmit
  );

  const handleSuccessTimeout = () => {
    setShowSuccess(false);
    navigate('/profile');
  };

  const handleErrorTimeout = () => {
    setShowError(false);
  };

  return (
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
            id="amenities.parking"
            checked={formData.amenities.parking}
            onChange={handleChange}
          />
          <label htmlFor="parking">Parking</label>
        </FormItemCheckbox>
        <FormItemCheckbox>
          <input
            type="checkbox"
            id="amenities.breakfast"
            checked={formData.amenities.breakfast}
            onChange={handleChange}
          />
          <label htmlFor="breakfast">Breakfast</label>
        </FormItemCheckbox>
        <FormItemCheckbox>
          <input
            type="checkbox"
            id="amenities.wifi"
            checked={formData.amenities.wifi}
            onChange={handleChange}
          />
          <label htmlFor="wifi">Wifi</label>
        </FormItemCheckbox>
        <FormItemCheckbox>
          <input
            type="checkbox"
            id="amenities.pets"
            checked={formData.amenities.pets}
            onChange={handleChange}
          />
          <label htmlFor="pets">Pets</label>
        </FormItemCheckbox>
      </FormGridContainer>
      <FormBtnContainer>
        {showSuccess ? (
          <Message
            message="Venue added successfully!"
            onTimeout={handleSuccessTimeout}
            type="success"
          />
        ) : showError ? (
          <Message
            message="Failed to add venue. Please try again."
            onTimeout={handleErrorTimeout}
            type="error"
          />
        ) : (
          <FormBtn text="Add Venue" type="submit" />
        )}
      </FormBtnContainer>
    </Form>
  );
};

export default AddVenueForm;
