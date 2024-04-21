import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import Navbar from './nav_bar';
import './contact.css'

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
    <div className="full-page">
      <Navbar />
      <h2 className='form-title'>Contact Us</h2>
      <form className="full-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className='form-labels' htmlFor="firstName">First Name:</label>
          <input className="input-box" type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" />
        </div>
        <div className="input-group">
          <label className='form-labels' htmlFor="lastName">Last Name:</label>
          <input className="input-box" type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" />
        </div>
        <div className="input-group">
          <label className='form-labels' htmlFor="email">Email:</label>
          <input className="input-box" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        </div>
        <div className="input-group">
          <label className='form-labels' htmlFor="comment">Comment:</label>
          <textarea rows="10"
              cols="20" className="input-box" name="comment" value={form.comment} onChange={handleChange} placeholder="Comment" />
        </div>
        <div className="button-div">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;


