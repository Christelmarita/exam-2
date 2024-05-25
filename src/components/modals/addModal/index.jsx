// src/components/modals/AddVenueModal.jsx
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../utils/authContext";
import { createVenue } from "../../../utils/venueService"; // Import the venue creation service
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;

const AddVenueModal = ({ show, onClose }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [media, setMedia] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const venueData = {
      name,
      description,
      location,
      price,
      maxGuests,
      media: media.split(",").map((url) => ({ url })),
    };

    try {
      await createVenue(venueData, user.accessToken);
      onClose();
      navigate("/profile");
    } catch (error) {
      alert("Failed to create venue");
    }
  };

  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Add Venue</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Description
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>
          <label>
            Location
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </label>
          <label>
            Price
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </label>
          <label>
            Max Guests
            <input type="number" value={maxGuests} onChange={(e) => setMaxGuests(e.target.value)} required />
          </label>
          <label>
            Media URLs (comma-separated)
            <input type="text" value={media} onChange={(e) => setMedia(e.target.value)} required />
          </label>
          <button type="submit">Create Venue</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

AddVenueModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddVenueModal;
