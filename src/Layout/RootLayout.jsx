import React from "react";
import { Outlet, Link } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/bestsellers" className="text-white">
              Bestsellers
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
