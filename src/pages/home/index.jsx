import React from "react";
import FilterForm from "../../components/forms/filterform";
import { PageCardContainer, FilterContainer, PageHeader, PageContainer, PageContent } from "../index.styles";
import VenueCard from "../../components/venueCard";

export default function Home() {
  return (
    <PageContainer>
      <PageContent>
        <PageHeader>
          <FilterContainer>
            <FilterForm />
          </FilterContainer>
        </PageHeader>
        <PageCardContainer>
          <VenueCard />
        </PageCardContainer>
      </PageContent>
    </PageContainer>
  );
}
