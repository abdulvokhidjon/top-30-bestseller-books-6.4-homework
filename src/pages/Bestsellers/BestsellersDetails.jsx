import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const BestsellersDetails = () => {
  const { id } = useParams();
  const { data: book, error } = useFetch(
    `http://localhost:3000/books?id=${id}`
  );

  if (error) return <p>Error loading book details.</p>;
  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-3xl font-bold">{book.title}</h2>
      <p className="text-xl text-gray-700">{book.author}</p>
      <p className="mt-4">{book.description}</p>
    </div>
  );
};

export default BestsellersDetails;
