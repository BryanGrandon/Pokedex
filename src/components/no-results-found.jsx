import React from "react";

function NoResultsFound() {
  return (
    <section className="no-results-found">
      <section className="no-results-found__svg"></section>

      <h2 className="no-results-found__title">No results found</h2>
      <p className="no-results-found__text">
        We couldn't find what you're looking for.
      </p>
    </section>
  );
}

export default NoResultsFound;
