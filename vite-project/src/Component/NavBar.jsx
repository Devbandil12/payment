// Navbar.jsx
import React, { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-900 text-white p-4 flex items-center justify-between mb-1">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        
        <span className="text-xl font-bold">करत करत<br />अभ्यास</span>
      </div>

      {/* Desktop Menu Links */}
      <div className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/About" className="hover:text-gray-300">About</a>
        <a href="/Contact" className="hover:text-gray-300">Contact</a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 flex flex-col space-y-4 p-4 z-20">
          <a href="/" className="hover:text-gray-300" onClick={toggleMenu}>Home</a>
          <a href="/About" className="hover:text-gray-300" onClick={toggleMenu}>About</a>
          <a href="/Contact" className="hover:text-gray-300" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
