import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const Bestsellers = () => {
  const { data: books, error } = useFetch(
    "http://localhost:3000/books"
  );

  if (error) return <p>Error loading books.</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bestsellers</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books &&
          books.map((book) => (
            <li
              key={book.id}
              className="border p-4 rounded-lg shadow hover:shadow-lg"
            >
              <Link to={`/bestsellers/${book.id}`}>
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-bold">{book.title}</h3>
                <p className="text-gray-700">{book.author}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Bestsellers;
