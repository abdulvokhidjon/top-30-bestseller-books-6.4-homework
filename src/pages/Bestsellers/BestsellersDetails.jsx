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

  if (error) return <div className="alert alert-error shadow-lg my-4">Error loading book details.</div>;
  if (loading) return <div className="flex justify-center items-center h-64"><div className="loading loading-spinner text-primary"></div></div>;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
        <p className="text-xl text-gray-700 mb-4">{book.author}</p>
        <p className="mt-4 text-gray-800">{book.description}</p>
      </div>
    </div>
  );
};

export default BestsellersDetails;
