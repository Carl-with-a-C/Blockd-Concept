import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button className="contact-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
