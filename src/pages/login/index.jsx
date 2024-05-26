import React from 'react';
import {
  PageContainer,
  PageContent,
  FormContainer,
  FormHeader,
} from '../index.styles';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/forms/login';

/**
 * Login component renders the login form and a link to the create account page.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function Login() {
  return (
    <PageContainer>
      <PageContent>
        <FormContainer>
          <FormHeader>
            <h1>Log in </h1>
            <p>
              Not a member?{' '}
              <Link to="/createaccount">
                <span>Create an account</span>
              </Link>
            </p>
          </FormHeader>
          <LoginForm />
        </FormContainer>
      </PageContent>
    </PageContainer>
  );
}
