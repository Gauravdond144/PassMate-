import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">
             Find your answers
            </a>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-blue-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="hover:text-gray-300">Home</a>
            <Link to="/addqna" className="hover:text-gray-300">Add Question</Link>
            <a href="/disclaimer" className="hover:text-gray-300">Disclaimer</a>
            <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
            <a href="/advertise" className="hover:text-gray-300">Advertise With Us</a>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          {/* Mobile Search Bar */}
          <div className="px-4 pt-2 pb-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-blue-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search..."
              />
            </div>
          </div>
          
          {/* Mobile Navigation Links */}
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 rounded-md hover:bg-blue-800">Home</a>
            <Link to="/addqna" className="block px-3 py-2 rounded-md hover:bg-blue-800">Add Question</Link>
            <a href="/disclaimer" className="block px-3 py-2 rounded-md hover:bg-blue-800">Disclaimer</a>
            <a href="/privacy" className="block px-3 py-2 rounded-md hover:bg-blue-800">Privacy Policy</a>
            <a href="/advertise" className="block px-3 py-2 rounded-md hover:bg-blue-800">Advertise With Us</a>
            <a href="/contact" className="block px-3 py-2 rounded-md hover:bg-blue-800">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;