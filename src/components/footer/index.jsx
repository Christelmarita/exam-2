import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooter, FooterContent } from './index.styles';

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <Link to="/">Home</Link>
        <p>&copy; 2024 Christel Østerbøe</p>
      </FooterContent>
    </StyledFooter>
  );
}
