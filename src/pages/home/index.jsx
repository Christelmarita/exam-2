// src/pages/home/index.jsx

import React, { useState } from "react";
import { PageCardContainer, PageHeader, PageContainer, PageContent } from "../index.styles";
import VenueCard from "../../components/venueCard";
import SearchForm from "../../components/forms/searchform";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <PageContainer>
      <PageContent>
        <PageHeader>
        </PageHeader>
        <SearchForm setSearchQuery={setSearchQuery} />
        <PageCardContainer>
          <VenueCard searchQuery={searchQuery} />
        </PageCardContainer>
      </PageContent>
    </PageContainer>
  );
}
