import React from "react";
import PropTypes from "prop-types";
import { Form, FormItem, FormBtnContainer, FormItemCheckbox } from "../index.styles";
import FormBtn from "../../buttons/formBtn";
import useForm from "../../../hooks/formHook";

const AuthForm = ({ initialState, handleSubmit: onSubmit, buttonText }) => {
  const { formData, handleChange, handleSubmit } = useForm(initialState, onSubmit);

  return (
    <Form onSubmit={handleSubmit}>
      {"name" in formData && (
        <FormItem>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormItem>
      )}
      <FormItem>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormItem>
      <FormItem>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </FormItem>
      {"confirmPassword" in formData && (
        <FormItem>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </FormItem>
      )}
      {"isVenueManager" in formData && (
        <FormItemCheckbox>
          <input
            type="checkbox"
            id="isVenueManager"
            checked={formData.isVenueManager}
            onChange={handleChange}
          />
          <label htmlFor="isVenueManager">Register as a Venue Manager</label>
        </FormItemCheckbox>
      )}
      <FormBtnContainer>
        <FormBtn text={buttonText} type="submit" />
      </FormBtnContainer>
    </Form>
  );
};

AuthForm.propTypes = {
  initialState: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default AuthForm;
