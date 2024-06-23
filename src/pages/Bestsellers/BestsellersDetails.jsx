import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useState, useEffect } from "react";

const BestsellersDetails = () => {
  const { id } = useParams();
  const { data: book, error } = useFetch(`http://localhost:3000/books/${id}`);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (book) {
      setLoading(false);
    }
  }, [book]);

  if (error)
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4"
        role="alert"
      >
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> Error loading book details.</span>
      </div>
    );
  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loading loading-spinner text-primary"></div>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg transform hover:-translate-y-2 transition duration-300 ease-in-out">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-96 object-cover mb-4 rounded-lg shadow-md transform transition duration-300 ease-in-out"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-indigo-200">
            {book.title}
          </h2>
          <p className="text-xl text-gray-300 mb-4">{book.author}</p>
          <p className="text-gray-400">{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BestsellersDetails;
