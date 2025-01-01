import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-gray-900 text-white/90 py-2 px-4 w-1/5 shadow-xl text-base ring-offset-2 active:ring ring-gray-900">
      {children}
    </button>
  );
};

export default Button;
