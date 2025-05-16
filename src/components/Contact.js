import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Contact Us</h1>
      <p>Have any questions? Feel free to reach out to us!</p>

      <div style={{ marginBottom: '20px' }}>
        <h2>Our Contact Details</h2>
        <p>📍 Address: Near Peth Vadgoan, Ishwarpur, Sangli</p>
        <p>📞 Phone: +91 12345 67890</p>
        <p>📧 Email: support@Krushnaesuperbazar.com</p>
      </div>

      <h2>Send Us a Message</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', margin: '5px 0' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', margin: '5px 0' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', margin: '5px 0' }}
        />
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}
