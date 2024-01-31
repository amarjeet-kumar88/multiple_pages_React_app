
import React, { useState } from 'react';
import './AddressForm.css';

const AddressForm = ({ onNext, onPrev, data, handleChange }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Validate address
    if (!data.address.trim()) {
      newErrors.address = 'Address is required';
    }

    // Validate city
    if (!data.city.trim()) {
      newErrors.city = 'City is required';
    }

    // Validate zip code
    const zipRegex = /^\d{6}$/;
    if (!data.zip.trim() || !zipRegex.test(data.zip)) {
      newErrors.zip = 'Valid zip code is required';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="form-container">
      <h2>Address</h2>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={data.address}
          onChange={handleChange}
        />
        {errors.address && <div className="error">{errors.address}</div>}
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={data.city}
          onChange={handleChange}
        />
        {errors.city && <div className="error">{errors.city}</div>}
      </label>
      <label>
        Zip Code:
        <input
          type="text"
          name="zip"
          value={data.zip}
          onChange={handleChange}
        />
        {errors.zip && <div className="error">{errors.zip}</div>}
      </label>
      {/* Add other address fields */}
      <button onClick={onPrev}>Previous</button>
      <button onClick={() => validate() && onNext()}>Next</button>
    </div>
  );
};

export default AddressForm;

