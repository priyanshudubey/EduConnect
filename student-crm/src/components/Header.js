import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ adminName, setLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/admin/logout", {
        method: "POST",
        credentials: "include", // Ensure cookies are sent
      });
      console.log("Logout successful");

      // Update loggedIn state and navigate back to login page
      setLoggedIn(false);
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-purple-700 text-white sticky top-0 py-4 z-50 shadow-md">
      <div className="flex items-center justify-between px-6 max-w-full">
        {/* Logo Section */}
        <a
          href="/"
          className="flex items-center">
          <img
            src="logo.png"
            className="h-8"
            alt="EduConnect Logo"
          />
          {/* <span className="text-lg font-bold ml-2">EDUCONNECT</span> */}
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/home"
            className="text-white hover:text-gray-300">
            Home
          </a>
          <a
            href="/about"
            className="text-white hover:text-gray-300">
            About
          </a>
          <a
            href="/fee-record"
            className="text-white hover:text-gray-300">
            Fee Record
          </a>
          <a
            href="/student-record"
            className="text-white hover:text-gray-300">
            Student Record
          </a>
          <a
            href="/student-performance"
            className="text-white hover:text-gray-300">
            Student Performance
          </a>
          {adminName && (
            <>
              <span className="text-white">Welcome, {adminName}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600">
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <button
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white hover:bg-gray-700 focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}>
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-purple-700 p-4 md:hidden">
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="/home"
                  className="text-white hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/fee-record"
                  className="text-white hover:text-gray-300">
                  Fee Record
                </a>
              </li>
              <li>
                <a
                  href="/student-record"
                  className="text-white hover:text-gray-300">
                  Student Record
                </a>
              </li>
              <li>
                <a
                  href="/student-performance"
                  className="text-white hover:text-gray-300">
                  Student Performance
                </a>
              </li>
              {adminName && (
                <>
                  <span className="block text-white">Welcome, {adminName}</span>
                  <button
                    onClick={handleLogout}
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Logout
                  </button>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
