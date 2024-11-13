import React, { useState } from 'react';
import Navbar from '../Component/NavBar';
import Footer from '../Footer';


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
    <>
    <Navbar/>
    <div className="bg-black flex justify-center items-center h-screen text-white overflow-hidden">
      <div className="bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-3xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl text-teal-400">Contact Us</h1>
          <hr className="border-t-2 border-teal-400 my-4 w-1/4 mx-auto" />
          <p>We'd love to hear from you! Reach out with any questions or feedback.</p>
          <div className="mt-6 text-left">
            <p><strong>Email:</strong> info@karatkaratabhays.com</p>
            <p><strong>Website:</strong> www.karatkaratabhays.com</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-teal-400 mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:bg-gray-600"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:bg-gray-600"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Message Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:bg-gray-600"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:bg-gray-600"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-teal-400 text-white rounded-lg hover:bg-teal-500 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Success Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl text-center">
              <h2 className="text-2xl text-teal-400">Successfully Submitted!</h2>
              <p className="text-white mt-2">Thank you for your message. We'll get back to you soon.</p>
              <button
                onClick={closeModal}
                className="mt-4 p-3 bg-teal-400 text-white rounded-lg hover:bg-teal-500 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
