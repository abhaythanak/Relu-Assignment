import React from "react";

const Button = ({ children, variant = "primary", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md ${
        variant === "primary" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
