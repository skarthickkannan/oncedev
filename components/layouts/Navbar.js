import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-3 ">
      <div className="nav__left">
        <img
          className="w-8 h-8 object-cover"
          src="http://theonceadev.tech/wp-content/uploads/2020/09/final-logo-black-trans.png"
          alt="logo"
        />
      </div>
      <div className="nav__right">
        <ul className="hidden md:flex space-x-3">
          <li>
            <a className="text-sm text-gray-500" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-500" href="/">
              Services
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-500" href="/">
              Portfolio
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-500" href="/">
              More
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-500" href="/">
              Contact
            </a>
          </li>
        </ul>
        <div className="nav__ham block md:hidden">
          <span>&#9776;</span>
        </div>
      </div>
    </nav>
  );
}
