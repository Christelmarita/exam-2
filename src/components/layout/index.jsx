import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation';
import Footer from '../footer';
import { Body } from './index.styles';

/**
 * Layout component serves as the main layout wrapper for the application,
 * including the navigation bar and footer.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
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
  children: PropTypes.node,
};

export default Layout;
