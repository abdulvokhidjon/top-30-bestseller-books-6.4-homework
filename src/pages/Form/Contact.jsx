const Contact = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-left">Name:</label>
          <input type="text" className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block text-left">Email:</label>
          <input type="email" className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block text-left">Message:</label>
          <textarea
            className="textarea textarea-bordered w-full"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
