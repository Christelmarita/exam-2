import React from "react";
import { PageContainer, PageContent, FormContainer, FormHeader } from "../index.styles";
import { Link } from "react-router-dom";
import CreateAccountForm from "../../components/forms/register";

export default function CreateAccount() {
  return (
    <PageContainer>
      <PageContent>
        <FormContainer>
          <FormHeader>
            <h1>Create an account</h1>
            <p>Already a member? <Link to="/login"><span>Log in</span></Link></p>
          </FormHeader>
          <CreateAccountForm />
        </FormContainer>
      </PageContent>
    </PageContainer>
  );
}