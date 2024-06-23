import { Outlet, Link } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-gray-900 text-white font-mono">
      <nav className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 p-4">
        <ul className="flex justify-evenly space-x-8">
          <li>
            <Link
              to="/"
              className="text-3xl hover:text-blue-300 transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/bestsellers"
              className="text-3xl hover:text-blue-300 transition duration-300 ease-in-out"
            >
              Bestsellers
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-3xl hover:text-blue-300 transition duration-300 ease-in-out"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-3xl hover:text-blue-300 transition duration-300 ease-in-out"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main className="p-4 min-h-screen">
        <Outlet />
        <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 p-4">
          <div className="container mx-auto text-center">
            <a
              href="https://github.com/abdulvokhidjon?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-indigo-100 transition duration-300"
            >
              Powered by Abdulvohid
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default RootLayout;
