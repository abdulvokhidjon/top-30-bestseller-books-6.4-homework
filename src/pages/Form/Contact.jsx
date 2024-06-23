const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-gray-900 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg transform hover:-translate-y-2 transition duration-300 ease-in-out">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-200 mb-6">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 text-lg mb-2">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 text-lg mb-2">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-300 text-lg mb-2"
            >
              Your Message:
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
