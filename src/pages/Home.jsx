import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [twinkle, setTwinkle] = useState(false);

  const handleTwinkle = () => {
    setTwinkle(!twinkle);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 z-10">
        {[...Array(100)].map((_, i) => (
          <span
            key={i}
            className={`absolute rounded-full w-1 h-1 ${
              twinkle ? "bg-white" : "bg-gray-800"
            } opacity-${Math.random() * 100} animate-twinkle`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8">
          A Trip to the <span className="text-violet-200">GALAXY</span>...
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-indigo-200 max-w-3xl text-center mb-12">
          Discover a universe of literary wonders. Explore bestselling books
          that will ignite your imagination and transport you to far-off realms.{" "}
          <br />{" "}
          <span className="text-4xl text-emerald-500">
            This project is based on "The Fault in Our Stars" by one of my
            favorite writers, John Green.
          </span>
        </p>
        <Link
          to="/bestsellers"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition duration-300 ease-in-out"
          onMouseEnter={handleTwinkle}
          onMouseLeave={handleTwinkle}
        >
          Unveil the Stars
        </Link>
      </div>
    </div>
  );
};

export default Home;
