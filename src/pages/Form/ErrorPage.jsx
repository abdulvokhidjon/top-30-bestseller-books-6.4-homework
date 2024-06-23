import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white">
      <div className="max-w-md w-full bg-gray-900 bg-opacity-50 shadow-lg rounded-lg p-8 text-center backdrop-filter backdrop-blur-lg transform hover:-translate-y-2 transition duration-300 ease-in-out">
        <h2 className="text-6xl font-bold mb-4 text-red-500">404</h2>
        <h3 className="text-3xl text-indigo-200 font-bold mb-4">
          Lost in the Cosmos?
        </h3>
        <p className="text-lg mb-6 text-gray-300">
          It seems the page you're searching for has drifted into a black hole.
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Return to Home Base
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
