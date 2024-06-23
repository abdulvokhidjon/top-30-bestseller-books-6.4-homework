import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-red-600">404</h2>
        <h3 className="text-2xl text-green-700 font-bold mb-2">
          Page Not Found
        </h3>
        <p className="text-lg mb-6 text-violet-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
