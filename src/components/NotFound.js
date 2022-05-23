import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Page not found</p>
      <Link to="/">Go back Home...</Link>
    </div>
  );
};
export default NotFound;
