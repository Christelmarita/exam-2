import React from 'react';
import {
  PageContainer,
  PageContent,
  FormContainer,
  FormHeader,
} from '../index.styles';
import EditVenueForm from '../../components/forms/editVenue';

/**
 * EditVenue component renders the form to edit an existing venue.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function EditVenue() {
  return (
    <PageContainer>
      <PageContent>
        <FormContainer>
          <FormHeader></FormHeader>
          <EditVenueForm />
        </FormContainer>
      </PageContent>
    </PageContainer>
  );
}
