import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../utils/authContext';
import useUserProfile from '../../hooks/profileHook'; // Correct import for the default export
import {
  NavContent,
  Nav,
  RightContent,
  Hamburger,
  MobileMenu,
} from './index.styles';
import { toTitleCase } from '../../utils/toTitleCase';

export default function Navigation() {
  const { user, logout } = useAuthContext();
  const { profileData, loading, error } = useUserProfile();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (loading) return null; // Or a loading spinner
  if (error) return <div>Error loading profile data.</div>;

  return (
    <Nav className={scrolled ? 'scrolled' : ''}>
      <NavContent>
        <Link to="/">
          <div className="logo-container">
            <h1>Holidaze</h1>
          </div>
        </Link>
        <Hamburger onClick={toggleMobileMenu}>
          <span />
          <span />
          <span />
        </Hamburger>
        <RightContent>
          {user ? (
            <>
              {profileData?.venueManager && (
                <Link to="/addvenue">
                  <button>
                    <p>Create Venue</p>
                  </button>
                </Link>
              )}
              <Link to="/profile">
                <button>
                  <p>{toTitleCase(user.name)}</p>
                </button>
              </Link>
              <button onClick={logout}>
                <p>Log out</p>
              </button>
            </>
          ) : (
            <Link to="/login">
              <button>
                <p>Log in</p>
              </button>
            </Link>
          )}
        </RightContent>
      </NavContent>
      {isMobileMenuOpen && (
        <MobileMenu>
          {user ? (
            <>
              {profileData?.venueManager && (
                <Link to="/addvenue" onClick={toggleMobileMenu}>
                  <button>
                    <p>Create Venue</p>
                  </button>
                </Link>
              )}
              <Link to="/profile" onClick={toggleMobileMenu}>
                <button>
                  <p>{toTitleCase(user.name)}</p>
                </button>
              </Link>
              <button onClick={() => { logout(); toggleMobileMenu(); }}>
                <p>Log out</p>
              </button>
            </>
          ) : (
            <Link to="/login" onClick={toggleMobileMenu}>
              <button>
                <p>Log in</p>
              </button>
            </Link>
          )}
        </MobileMenu>
      )}
    </Nav>
  );
}
