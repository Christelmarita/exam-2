import React from 'react';
import Layout from './components/layout';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './utils/authContext.js';
import './index.css';
import Home from './pages/home';
import Venue from './pages/venue';
import Profile from './pages/profile';
import Login from './pages/login';
import CreateAccount from './pages/createaccount';
import AddVenue from './pages/addVenue';
import EditVenueForm from './pages/editVenue';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/venue/:id" element={<Venue />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/addvenue" element={<AddVenue />} />
            <Route path="/editvenue/:venueId" element={<EditVenueForm />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
