import React from "react";

function ButtonMain({ children, onClick, className }) {
  return (
    <button
      className={`button-main ${className}`}
      target="_blank"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonMain;
