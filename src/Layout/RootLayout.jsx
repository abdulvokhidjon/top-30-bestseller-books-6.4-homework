import { Outlet, Link } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="bg-gray-900 text-white font-mono"> {/* Dark background, white text, sci-fi font */}
      <nav className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 p-4"> 
        {/* Gradient background for the navbar */}
        <ul className="flex justify-evenly space-x-8"> {/* Center the links */}
          <li>
            <Link 
              to="/"  
              className="text-3xl hover:text-blue-300 transition duration-300 ease-in-out" // Smooth hover effect
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
      <main className="p-4 min-h-screen"> {/* Ensure main content takes up full viewport height */}
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;