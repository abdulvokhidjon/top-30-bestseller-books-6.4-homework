import { Link, useLocation } from "react-router-dom";

function BreadCrums() {
  const location = useLocation();

  let currentLink = [];

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`); // Use backticks for template literal
      return (
        <div className="crumb text-indigo-200" key={crumb}>
          <Link
            to={currentLink.join("")}
            className="hover:text-indigo-100 transition duration-300"
          >
            {crumb.replace(/%20/g, " ")}
          </Link>
          <span className="text-gray-500 mx-2">/</span>
        </div>
      );
    });

  return (
    <div className="breadcrumbs text-sm sm:text-base py-4 px-4 sm:px-6 lg:px-8 bg-gray-900">
      {" "}
      {crumbs}
    </div>
  );
}

export default BreadCrums;
