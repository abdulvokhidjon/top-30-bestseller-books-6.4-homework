import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useState, useEffect } from "react";

const Bestsellers = () => {
  const { data: books, error } = useFetch("http://localhost:3000/books");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (books) {
      setLoading(false);
    }
  }, [books]);

  if (error)
    return (
      <div className="alert alert-error shadow-lg my-4">
        Error loading books.
      </div>
    );
  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loading loading-spinner text-primary"></div>
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Top 20 Bestseller Books</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <li
            key={book.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
          >
            <Link to={`/bestsellers/${book.id}`}>
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bestsellers;
