import { useState } from 'react';

/**
 * Custom hook to manage form state and handle form submission.
 *
 * @function useForm
 * @param {Object} initialState
 * @param {Function} callback
 * @returns {Object}
 */
const useForm = (initialState, callback) => {
  const [formData, setFormData] = useState(initialState);

  /**
   * Handles the change event for form inputs and updates the form data state.
   *
   * @function handleChange
   * @param {Event} e
   */
  const handleChange = (e) => {
    const { id, name, value, type, checked } = e.target;
    const key = id || name;

    setFormData((prev) => {
      if (type === 'checkbox') {
        if (key.includes('.')) {
          const [parentKey, childKey] = key.split('.');
          return {
            ...prev,
            [parentKey]: {
              ...prev[parentKey],
              [childKey]: checked,
            },
          };
        }
        return {
          ...prev,
          [key]: checked,
        };
      }
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  /**
   * Handles the form submission event and calls the callback function with the form data.
   *
   * @function handleSubmit
   * @param {Event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    callback(formData);
  };

  return { formData, handleChange, handleSubmit };
};

export default useForm;
