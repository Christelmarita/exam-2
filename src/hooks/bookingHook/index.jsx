import { useState, useEffect } from "react";
import useFetch from "../fetchHook";
import { bookingsUrl } from "../../utils/constants";

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

  const calculateTotalPrice = (start, end, pricePerNight, guestsCount) => {
    const dateFrom = new Date(start);
    const dateTo = new Date(end);
    const days = (dateTo - dateFrom) / (1000 * 60 * 60 * 24);
    return days * pricePerNight * guestsCount;
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      setTotalPrice(calculateTotalPrice(start, end, venue.price, guests));
    }
  };

  const handleGuestsChange = (e) => {
    const value = Number(e.target.value);
    setGuests(value);

    if (startDate && endDate) {
      setTotalPrice(calculateTotalPrice(startDate, endDate, venue.price, value));
    }
  };

  const handleSubmit = async (e, user) => {
    e.preventDefault();
    if (!user) {
      alert("You need to be logged in to make a booking.");
      return;
    }

    if (!startDate || !endDate) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    const bookingPayload = {
      dateFrom: new Date(startDate).toISOString(),
      dateTo: new Date(endDate).toISOString(),
      guests,
      venueId: venue.id,
    };

    console.log("Submitting booking data:", bookingPayload);

    try {
      await performFetch({
        method: "POST",
        body: JSON.stringify({
          ...bookingPayload,
          token: user.accessToken,
        }),
      });
      console.log("Booking successful:", data);
      alert("Booking successful!");
    } catch (error) {
      console.error("Failed to make the booking:", error.message);
      alert(`Failed to make the booking: ${error.message}`);
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
