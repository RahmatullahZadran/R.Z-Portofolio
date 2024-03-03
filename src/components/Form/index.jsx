import React, { useState } from 'react';
import './style.css';

function Form() {
  // Setting the component's initial state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;
    if (formData.password > 15) {
      return
      
    }

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    if (!formData.firstName || !formData.lastName) {
      alert('Please fill out all fields');
      return
    }


    if (name === 'password' && value.length > 15) {
      // If the length of the password exceeds 15 characters, prevent further input
      alert('Password must be a maximum of 15 characters.');
      return;
  }
    
  
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `formData.firstName` and `formData.lastName`, clearing the inputs
    alert(`Hello ${formData.firstName} ${formData.lastName}`);
    setFormData({
      firstName: '',
      lastName: '',
      password: '',
    });
  };

  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <div>
      <p>
        Hello {formData.firstName} {formData.lastName}
      </p>
      <form className="form">
        <input
          value={formData.firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={formData.lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
         <input
          value={formData.password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
