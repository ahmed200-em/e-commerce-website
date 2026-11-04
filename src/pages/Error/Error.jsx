import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function NotFound() {
  return (
    <section section className="not-found">
      <span className="not-found-symbol">✳</span>
      <span className="eyebrow">Page not found</span>
      <h1>
        Looks like a<br />
        <em>wrong turn.</em>
      </h1>
      <p>
        The page you’re looking for isn’t here. Let’s get you back to something
        good.
      </p>
      <Link className="button-primary" to="/">
        Back to home <span>↗</span>
      </Link>
    </section>
  );
}
export default NotFound;
