// src/pages/home/index.jsx

import React, { useState } from 'react';
import {
  PageCardContainer,
  PageHeader,
  PageContainer,
  PageContent,
  HeroImage,
  HeroText,
} from '../index.styles';
import VenueCard from '../../components/venueCard';
import SearchForm from '../../components/forms/searchform';
import heroImage from '../../images/assets/hero_img.jpg';

/**
 * Home component renders the home page with a hero image, search form, and a list of venue cards.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <PageContainer>
      <PageHeader>
        <HeroImage src={heroImage} alt="Hero Image">
          <HeroText>YOUR PERFECT GETAWAY</HeroText>
        </HeroImage>
      </PageHeader>
      <PageContent>
        <SearchForm setSearchQuery={setSearchQuery} />
        <PageCardContainer>
          <VenueCard searchQuery={searchQuery} />
        </PageCardContainer>
      </PageContent>
    </PageContainer>
  );
}
