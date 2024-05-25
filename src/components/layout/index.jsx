import React from "react";
import PropTypes from 'prop-types';
import Navigation from "../navigation";
import Footer from "../footer";
import { Body } from "./index.styles";

function Layout({ children }) {
  
  return (
    <Body>
      <Navigation />
      {children}
      <Footer />
    </Body>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
