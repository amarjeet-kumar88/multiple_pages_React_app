
import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = ({ onPrev, onSubmit, data, handleChange }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Validate card number
    const cardNumberRegex = /^\d{16}$/;
    if (!data.cardNumber.trim() || !cardNumberRegex.test(data.cardNumber)) {
      newErrors.cardNumber = 'Valid card number is required';
    }

    // Validate expiry date (for simplicity, assuming MM/YY format)
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!data.expiryDate.trim() || !expiryDateRegex.test(data.expiryDate)) {
      newErrors.expiryDate = 'Valid expiry date is required (MM/YY)';
    }

    // Validate CVV
    const cvvRegex = /^\d{3}$/;
    if (!data.cvv.trim() || !cvvRegex.test(data.cvv)) {
      newErrors.cvv = 'Valid CVV is required';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="form-container">
      <h2>Payment Details</h2>
      <label>
        Card Number:
        <input
          type="text"
          name="cardNumber"
          value={data.cardNumber}
          onChange={handleChange}
        />
        {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}
      </label>
      <label>
        Expiry Date:
        <input
          type="text"
          name="expiryDate"
          value={data.expiryDate}
          onChange={handleChange}
        />
        {errors.expiryDate && <div className="error">{errors.expiryDate}</div>}
      </label>
      <label>
        CVV:
        <input
          type="text"
          name="cvv"
          value={data.cvv}
          onChange={handleChange}
        />
        {errors.cvv && <div className="error">{errors.cvv}</div>}
      </label>
      <button onClick={onPrev}>Previous</button>
      <button onClick={() => validate() && onSubmit()}>Submit</button>
    </div>
  );
};

export default PaymentForm;
