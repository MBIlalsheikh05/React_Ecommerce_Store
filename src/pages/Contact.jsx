import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Your message has been sent!');
  };

  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-5">Contact Us</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Have any questions or concerns? Feel free to reach out to us.
        </p>

        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Contact Information</h2>
          <p className="text-gray-600 mb-4">
            Phone: +92-3258455701
          </p>
          <p className="text-gray-600 mb-8">
            Email: e-shop11@gmail.com
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Your Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                required 
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Your Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                required 
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Your Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                rows="5" 
                required 
              />
            </div>

            <div className="text-center">
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
