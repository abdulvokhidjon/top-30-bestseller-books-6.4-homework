import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useState, useEffect } from "react";

const Bestsellers = () => {
  const { data: books, error } = useFetch("https://online-json-server-api.up.railway.app/project/66783b6f1d2cd3eb1143f800/books");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (books) {
      setLoading(false);
    }
  }, [books]);

  if (error)
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4"
        role="alert"
      >
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> Error loading books.</span>
      </div>
    );

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loading loading-spinner text-primary"></div>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        Top 20 Bestseller Books
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <li
            key={book.id}
            className="transform hover:-translate-y-2 transition duration-300 ease-in-out"
          >
            <Link
              to={`/bestsellers/${book.id}`}
              className="relative block group"
            >
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>{" "}
                {/* Overlay effect */}
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg md:text-xl font-bold text-indigo-200 group-hover:text-white transition duration-300 ease-in-out">
                  {book.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition duration-300 ease-in-out">
                  {book.author}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bestsellers;
