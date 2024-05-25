import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../utils/authContext";
import useUserProfile from "../../hooks/profileHook";
import { NavContent, Nav, RightContent } from "./index.styles";
import { toTitleCase } from "../../utils/toTitleCase";

export default function Navigation() {
  const { user, logout } = useAuthContext();
  const { profileData, loading, error } = useUserProfile();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Nav className={scrolled ? "scrolled" : ""}>
      <NavContent>
        <Link to="/">
          <div>
            <h1>Holidaze</h1>
          </div>
        </Link>
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
    </Nav>
  );
}
