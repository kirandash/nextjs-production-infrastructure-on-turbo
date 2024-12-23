import React from "react";

interface InputProps {
  className?: string;
  placeholder?: string;
}

const Input = ({ className, placeholder }: InputProps) => {
  return (
    <input
      className={className}
      type="text"
      placeholder={placeholder ?? "Enter text for company-website title"}
    />
  );
};

export default Input;
