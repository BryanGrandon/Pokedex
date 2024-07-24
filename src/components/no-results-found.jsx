import React from "react";

function NoResultsFound() {
  return (
    <section className="no-results-found">
      <img
        className="no-results-found__svg"
        src="/src/assets/no-results-found.svg"
        alt="no-results-found.png"
      />

      <h2 className="no-results-found__title">No results found</h2>
      <p className="no-results-found__text">
        We couldn't find what you're looking for.
      </p>
    </section>
  );
}

export default NoResultsFound;
