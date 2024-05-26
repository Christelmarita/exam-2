import React from 'react';
import {
  PageContainer,
  PageContent,
  FormContainer,
  FormHeader,
} from '../index.styles';
import AddVenueForm from '../../components/forms/addvenue';

/**
 * AddVenue component renders the form to add a new venue.
 *
 * @component
 * @returns {JSX.Element}
 */
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
