import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 z-1">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Column 1: About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We provide financial support and career assistance to students and job seekers. Our goal is to help individuals succeed in their educational and professional pursuits.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:underline">Services</a></li>
              <li><a href="/Contact" className="text-sm hover:underline">Contact Us</a></li>
              <li><a href="/About" className="text-sm hover:underline">About Us</a></li>
              <li><a href="/" className="text-sm hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 upDate Devloping Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
