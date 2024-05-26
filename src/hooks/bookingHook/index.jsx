import { useState, useEffect } from 'react';
import useFetch from '../fetchHook';
import { bookingsUrl } from '../../utils/constants';

/**
 * Custom hook to manage booking state and handle booking logic.
 *
 * @function useBooking
 * @param {Object} venue
 * @returns {Object}
 */
const useBooking = (venue) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [excludeDates, setExcludeDates] = useState([]);
  const { performFetch, loading, error, data } = useFetch(bookingsUrl);

  useEffect(() => {
    if (venue && venue.bookings) {
      const exclude = venue.bookings.flatMap((booking) => {
        const dateFrom = new Date(booking.dateFrom);
        const dateTo = new Date(booking.dateTo);
        return [dateFrom, dateTo];
      });
      setExcludeDates(exclude);
    }
  }, [venue]);

  /**
   * Calculates the total price for the booking.
   *
   * @param {Date} start
   * @param {Date} end
   * @param {number} pricePerNight
   * @param {number} guestsCount
   * @returns {number}
   */
  const calculateTotalPrice = (start, end, pricePerNight, guestsCount) => {
    const dateFrom = new Date(start);
    const dateTo = new Date(end);
    const days = (dateTo - dateFrom) / (1000 * 60 * 60 * 24);
    return days * pricePerNight * guestsCount;
  };

  /**
   * Handles the date change event and updates the state accordingly.
   *
   * @param {Array<Date>} dates
   */
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      setTotalPrice(calculateTotalPrice(start, end, venue.price, guests));
    }
  };

  /**
   * Handles the change in the number of guests and updates the state accordingly.
   *
   * @param {Event} e
   */
  const handleGuestsChange = (e) => {
    const value = Number(e.target.value);
    setGuests(value);

    if (startDate && endDate) {
      setTotalPrice(
        calculateTotalPrice(startDate, endDate, venue.price, value)
      );
    }
  };

  /**
   * Handles the booking form submission.
   *
   * @param {Event} e
   * @param {Object} user
   * @returns {Object}
   */
  const handleSubmit = async (e, user) => {
    e.preventDefault();
    if (!user) {
      return {
        success: false,
        message: 'You need to be logged in to make a booking.',
      };
    }

    if (!startDate || !endDate) {
      return {
        success: false,
        message: 'Please select check-in and check-out dates.',
      };
    }

    const bookingPayload = {
      dateFrom: new Date(startDate).toISOString(),
      dateTo: new Date(endDate).toISOString(),
      guests,
      venueId: venue.id,
    };

    try {
      await performFetch({
        method: 'POST',
        body: JSON.stringify({
          ...bookingPayload,
          token: user.accessToken,
        }),
      });
      return { success: true, message: 'Booking successful!' };
    } catch (error) {
      console.error('Failed to make the booking:', error.message);
      return {
        success: false,
        message: `Failed to make the booking: ${error.message}`,
      };
    }
  };

  return {
    startDate,
    endDate,
    guests,
    totalPrice,
    excludeDates,
    loading,
    error,
    data,
    handleDateChange,
    handleGuestsChange,
    handleSubmit,
  };
};

export default useBooking;
