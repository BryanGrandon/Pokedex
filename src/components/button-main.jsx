import React from "react";

function ButtonMain({ children, onClick, className }) {
  return (
    <button className={`button ${className}`} target="_blank" onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonMain;
