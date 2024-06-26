import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  TotalPrice,
  FormBtnContainer,
  FormBooking,
  FormBookingItem,
  LoginPrompt,
} from '../index.styles';
import BookBtn from '../../buttons/bookBtn';
import { AuthContext } from '../../../utils/authContext';
import useBooking from '../../../hooks/bookingHook';
import { Link, useLocation } from 'react-router-dom';
import Message from '../../message';

/**
 * BookingForm component handles the booking form for a venue.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.venue
 * @returns {JSX.Element}
 */
export default function BookingForm({ venue }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const {
    startDate,
    endDate,
    guests,
    totalPrice,
    excludeDates,
    handleDateChange,
    handleGuestsChange,
    handleSubmit,
  } = useBooking(venue);

  const [message, setMessage] = useState(null);

  const handleBookingSubmit = async (e) => {
    const result = await handleSubmit(e, user);
    setMessage(result);
    if (result.success) {
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    }
  };

  return (
    <>
      <FormBooking onSubmit={handleBookingSubmit}>
        <FormBookingItem>
          <label htmlFor="dateRange">Check-in and check-out dates:</label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            excludeDates={excludeDates}
            selectsRange
            inline
          />
          <label htmlFor="guests">Guests:</label>
          <input
            id="guests"
            name="guests"
            type="number"
            max={venue.maxGuests}
            value={guests}
            onChange={handleGuestsChange}
            required
          />
        </FormBookingItem>
        <FormBookingItem>
          <TotalPrice>
            <p>
              Per person, per night: <b>{venue.price} NOK</b>
            </p>
            <p>
              Total:{' '}
              <b>
                {totalPrice > 0
                  ? `${totalPrice} NOK`
                  : 'Please select dates and number of guests'}
              </b>
            </p>
          </TotalPrice>
          <FormBtnContainer>
            {user ? (
              message && message.success ? (
                <Message
                  message={message.message}
                  onTimeout={() => setMessage(null)}
                />
              ) : (
                <BookBtn type="submit" />
              )
            ) : (
              <LoginPrompt>
                <Link to="/login" state={{ from: location.pathname }}>
                  Log in to book
                </Link>
              </LoginPrompt>
            )}
          </FormBtnContainer>
        </FormBookingItem>
      </FormBooking>
    </>
  );
}

BookingForm.propTypes = {
  venue: PropTypes.shape({
    price: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    bookings: PropTypes.arrayOf(
      PropTypes.shape({
        dateFrom: PropTypes.string.isRequired,
        dateTo: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
