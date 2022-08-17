import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <article className="container p-4 mx-auto max-w-6xl text-center flex-1 flex flex-col items-center justify-center">
      <h1 className="font-headings text-3xl font-semibold text-secondary-200 mb-6">
        You've found a page that doesn't exist
      </h1>
      <p className="text-gray-800 text-lg mb-4">
        What you're looking for is not here...
      </p>
      <Link to="/" className="bg-primary-100 text-tertiary-100 px-4 py-2 mb-20">
        Back to Home
      </Link>
    </article>
  );
};

export default NotFound;
