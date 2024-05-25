import React from "react";
import { PageContainer, PageContent, FormContainer, FormHeader } from "../index.styles";
import EditVenueForm from "../../components/forms/editVenue";

export default function EditVenue() {
  return (
    <PageContainer>
      <PageContent>
        <FormContainer>
          <FormHeader>
          </FormHeader>
          <EditVenueForm />
        </FormContainer>
      </PageContent>
    </PageContainer>
  );
}