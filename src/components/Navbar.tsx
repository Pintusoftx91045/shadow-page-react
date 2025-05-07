
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-white">
      <div className="symposium-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <span className="font-bold text-xl">NAIPI | IDeA</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="/about-us" className="px-3 py-2 text-sm font-medium hover:bg-blue-800">ABOUT US</a>
              <a href="/updates" className="px-3 py-2 text-sm font-medium hover:bg-blue-800">UPDATES</a>
              <a href="/events" className="px-3 py-2 text-sm font-medium hover:bg-blue-800">EVENTS</a>
              <a href="/faq" className="px-3 py-2 text-sm font-medium hover:bg-blue-800">FAQ</a>
              <a href="/link-the-data" className="px-3 py-2 text-sm font-medium hover:bg-blue-800">LINK THE DATA</a>
              <a href="/resources" className="px-3 py-2 text-sm font-medium hover:bg-blue-800">RESOURCES</a>
              <a href="/contact-us" className="px-3 py-2 text-sm font-medium hover:bg-blue-800">CONTACT US</a>
              <a href="#" className="px-3 py-2 text-sm font-medium hover:bg-blue-800">LOG IN/SIGN UP</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/about-us" className="block px-3 py-2 text-base font-medium hover:bg-blue-800">ABOUT US</a>
            <a href="/updates" className="block px-3 py-2 text-base font-medium hover:bg-blue-800">UPDATES</a>
            <a href="/events" className="block px-3 py-2 text-base font-medium hover:bg-blue-800">EVENTS</a>
            <a href="/faq" className="block px-3 py-2 text-base font-medium hover:bg-blue-800">FAQ</a>
            <a href="/link-the-data" className="block px-3 py-2 text-base font-medium hover:bg-blue-800">LINK THE DATA</a>
            <a href="/resources" className="block px-3 py-2 text-base font-medium hover:bg-blue-800">RESOURCES</a>
            <a href="/contact-us" className="block px-3 py-2 text-base font-medium hover:bg-blue-800">CONTACT US</a>
            <a href="#" className="block px-3 py-2 text-base font-medium hover:bg-blue-800">LOG IN/SIGN UP</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
