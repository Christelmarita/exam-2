export const baseUrl = "https://v2.api.noroff.dev/";
export const registerEndpoint = "auth/register";
export const loginEndpoint = "auth/login";
export const venuesEndpoint = "holidaze/venues";
export const bookingsEndpoint = "holidaze/bookings";
export const userEndpoint = "holidaze/profiles/";

export const queryCustomer = "_customer"; 
export const queryVenue = "_venue"; 
export const queryOwner = "_owner";
export const queryBooking = "_bookings"; 
export const searchQuery = "holidaze/venues/search?q="; 

export const registerUrl = baseUrl + registerEndpoint;
export const loginUrl = baseUrl + loginEndpoint;
export const venuesUrl = baseUrl + venuesEndpoint;
export const bookingsUrl = baseUrl + bookingsEndpoint;
export const userUrl = baseUrl + userEndpoint;
export const searchUrl = baseUrl + searchQuery;
export const createVenueUrl = baseUrl + venuesEndpoint;
