import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, FormItem, FormBtnContainer, FormItemCheckbox, ErrorMessage } from "../index.styles";
import FormBtn from "../../buttons/formBtn";
import useForm from "../../../hooks/formHook";

const AuthForm = ({ initialState, handleSubmit: onSubmit, buttonText }) => {
  const { formData, handleChange, handleSubmit } = useForm(initialState, onSubmit);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if ("name" in formData && !formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.endsWith("@stud.noroff.no")) {
      newErrors.email = "Email must be a stud.noroff.no email.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    }
    if ("confirmPassword" in formData && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleSubmit(e);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
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
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
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
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
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
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
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
          {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
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
          <label htmlFor="isVenueManager">Register as Venue Manager</label>
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
