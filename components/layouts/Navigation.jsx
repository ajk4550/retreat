import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

const Navigation = () => {
  // Keep track of if the mobile menu is showing in state.
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const mobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="bg-gray-100 fixed inset-x-0 top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              {/* Logo */}
              <a className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <Image
                  alt="Temporary Logo"
                  src="/logo.png"
                  height={40}
                  width={40}
                />
                <span className="font-bold ml-2">Retreat</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex items-center space-x-1">
            <a className="py-5 px-3 hover:text-pink-700 hover:cursor-pointer">
              Sign In
            </a>
            <a className="py-2 px-4 bg-pink-700 hover:bg-pink-800 text-white rounded-lg hover:cursor-pointer">
              Sign up
            </a>
          </div>

          <div className="md:hidden flex items-center">
            {/* Hamburger Menu Toggle */}
            <button
              className="mobile-menu-button border border-gray-300 rounded py-1 px-1"
              onClick={mobileMenuToggle}
            >
              {showMobileMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`mobile-menu ${showMobileMenu ? '' : 'hidden'} md:hidden`}
      >
        {/* Mobile Menu */}
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Sign Out
        </a>
        <a className="block py-2 px-4 text-sm hover:bg-gray-200">Sign In</a>
      </div>
    </nav>
  );
};

export default Navigation;
