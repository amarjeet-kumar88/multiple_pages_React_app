import './PersonalDetailsForm.css';
import React, { useState } from 'react';

const PersonalDetailsForm = ({ onNext, data, handleChange }) => {
    const [errors, setErrors] = useState({});

    const validate = () => {
      const newErrors = {};
  
      // Validate name
      if (!data.name.trim()) {
        newErrors.name = 'Name is required';
      }
  
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!data.email.trim() || !emailRegex.test(data.email)) {
        newErrors.email = 'Valid email is required';
      }
  
      // Validate phone
      const phoneRegex = /^[0-9]+$/;
      if (!data.phone.trim() || !phoneRegex.test(data.phone)) {
        newErrors.phone = 'Valid phone number is required';
      }
  
      setErrors(newErrors);
  
      // Return true if there are no errors
      return Object.keys(newErrors).length === 0;
    };

  return (
    <div>
      <h2>Personal Details</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />
      </label>
      <button onClick={() => validate() && onNext()}>Next</button>
    </div>
  );
};

export default PersonalDetailsForm;
