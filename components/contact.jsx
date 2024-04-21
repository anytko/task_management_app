import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import Navbar from './nav_bar';

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <Navbar /> {/* Include the navbar at the top */}
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" />
        </div>
        <div>
          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" />
        </div>
        <div>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        </div>
        <div>
          <textarea name="comment" value={form.comment} onChange={handleChange} placeholder="Comment" />
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default ContactForm;