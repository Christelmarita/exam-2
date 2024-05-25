import React, { useContext } from "react";
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TotalPrice, FormBtnContainer, FormBooking, FormBookingItem } from "../index.styles";
import BookBtn from "../../buttons/bookBtn";
import { AuthContext } from "../../../utils/authContext";
import useBooking from "../../../hooks/bookingHook";

export default function BookingForm({ venue }) {
  const { user } = useContext(AuthContext);
  const {
    startDate,
    endDate,
    guests,
    totalPrice,
    excludeDates,
    loading,
    error,
    handleDateChange,
    handleGuestsChange,
    handleSubmit,
  } = useBooking(venue);

  return (
    <>
      <FormBooking onSubmit={(e) => handleSubmit(e, user)}>
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
            <p>Per person, per night: <b>{venue.price} NOK</b></p>
            <p>Total: <b>{totalPrice > 0 ? `${totalPrice} NOK` : 'Please select dates and number of guests'}</b></p>
          </TotalPrice>
          <FormBtnContainer>
            <BookBtn type="submit" />
          </FormBtnContainer>
        </FormBookingItem>
      </FormBooking>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
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
