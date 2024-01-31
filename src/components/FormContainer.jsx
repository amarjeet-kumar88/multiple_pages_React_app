
import React, { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import './FormContainer.css';

const FormContainer = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onNext = () => {
    // Validate form data before proceeding to the next step
    const newErrors = {};
    
    // Perform additional validation checks if needed
    if (step === 1) {
      if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
        newErrors.general = 'Please fill in all required fields.';
      }
    } else if (step === 2) {
      if (!formData.address.trim() || !formData.city.trim() || !formData.zip.trim()) {
        newErrors.general = 'Please fill in all required fields.';
      }
    }

    setErrors(newErrors);

    // Proceed to the next step if there are no errors
    if (Object.keys(newErrors).length === 0) {
      setStep(step + 1);
    }
  };

  const onPrev = () => setStep(step - 1);

  const onSubmit = () => {
    // Validate form data before submission
    const newErrors = {};
    
    // Perform additional validation checks if needed
    if (!formData.cardNumber.trim() || !formData.expiryDate.trim() || !formData.cvv.trim()) {
      newErrors.general = 'Please fill in all required fields.';
    }

    setErrors(newErrors);

    // Log the form data or perform other actions if there are no errors
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      // You can perform additional actions here (e.g., send data to a server)
    }
  };

  return (
    <div className="form-container">
      {step === 1 && (
        <PersonalDetailsForm
          onNext={onNext}
          data={formData}
          handleChange={handleChange}
        />
      )}
      {step === 2 && (
        <AddressForm
          onNext={onNext}
          onPrev={onPrev}
          data={formData}
          handleChange={handleChange}
        />
      )}
      {step === 3 && (
        <PaymentForm
          onPrev={onPrev}
          onSubmit={onSubmit}
          data={formData}
          handleChange={handleChange}
        />
      )}

      {errors.general && <div className="error">{errors.general}</div>}
    </div>
  );
};

export default FormContainer;
