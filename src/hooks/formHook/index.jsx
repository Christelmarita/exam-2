import { useState } from "react";

const useForm = (initialState, callback) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { id, name, value, type, checked } = e.target;
    const key = id || name;

    setFormData((prev) => {
      if (type === "checkbox") {
        if (key.includes(".")) {
          const [parentKey, childKey] = key.split(".");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(formData);
  };

  return { formData, handleChange, handleSubmit };
};

export default useForm;
