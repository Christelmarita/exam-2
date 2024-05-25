import React from "react";
import { PageContainer, PageContent, FormContainer, FormHeader } from "../index.styles";
import AddVenueForm from "../../components/forms/addvenue";

export default function AddVenue() {
  return (
    <PageContainer>
      <PageContent>
        <FormContainer>
          <FormHeader>
            <h1>Add venue</h1>
          </FormHeader>
          <AddVenueForm />
        </FormContainer>
      </PageContent>
    </PageContainer>
  );
}