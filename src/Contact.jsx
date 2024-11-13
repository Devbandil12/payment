import React, { useState } from 'react';
import "./Contact.css"
const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Show success modal
    setIsModalOpen(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="contact-container_garima">
      <div className="contact-info_garima">
        <h1>Contact Us</h1>
        <hr />
        <p>We'd love to hear from you! Reach out with any questions or feedback.</p>
        <div className="contact-details_garima">
          <p><strong>Email:</strong> info@karatkaratabhays.com</p>
          <p><strong>Website:</strong> www.karatkaratabhays.com</p>
        </div>
      </div>
      <div className="contact-form_garima">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
         <input 
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Message Subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div id="successModal_garima" className="modal_garima">
          <h2>Successfully Submitted!</h2>
          <p>Thank you for your message. We'll get back to you soon.</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
