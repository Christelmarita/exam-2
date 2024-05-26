import React from 'react';
import Logo from './assets/logo.png';
import Search from './assets/search_bl.png';
import PlaceholderAvatar from './assets/placeholder_profile.png';
import Location from './assets/loc_bl.png';
import PlaceholderImage from './assets/placeholder_image.png';
import Pets from './assets/pets_bl.png';
import Wifi from './assets/wifi_bl.png';
import Parking from './assets/p_bl.png';
import Breakfast from './assets/bf_bl.png';
import Bed from './assets/bed_bl.png';
import Rating from './assets/star_bl.png';

const Icons = {
  Logo: () => {
    return <img src={Logo} alt="Logo icon" name="Logo" role="presentation" />;
  },

  Search: () => {
    return (
      <img src={Search} alt="Search icon" name="Search" role="presentation" />
    );
  },

  PlaceholderAvatar: () => {
    return (
      <img
        src={PlaceholderAvatar}
        alt="Placeholder avatar"
        name="Placeholder avatar"
        role="presentation"
      />
    );
  },

  Location: () => {
    return (
      <img
        src={Location}
        alt="Location icon"
        name="Location"
        role="presentation"
      />
    );
  },

  PlaceholderImage: () => {
    return (
      <img
        src={PlaceholderImage}
        alt="Placeholder"
        name="Placeholder image"
        role="presentation"
      />
    );
  },

  Pets: () => {
    return <img src={Pets} alt="Pets icon" name="Pets" role="presentation" />;
  },

  Wifi: () => {
    return <img src={Wifi} alt="Wifi icon" name="Wifi" role="presentation" />;
  },

  Parking: () => {
    return (
      <img
        src={Parking}
        alt="Parking icon"
        name="Parking"
        role="presentation"
      />
    );
  },

  Breakfast: () => {
    return (
      <img
        src={Breakfast}
        alt="Breakfast icon"
        name="Breakfast"
        role="presentation"
      />
    );
  },

  Bed: () => {
    return <img src={Bed} alt="Bed icon" name="Bed" role="presentation" />;
  },

  Rating: () => {
    return (
      <img src={Rating} alt="Rating icon" name="Rating" role="presentation" />
    );
  },
};

export default Icons;
