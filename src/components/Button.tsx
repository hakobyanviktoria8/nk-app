import React from "react";
import "./../styles/button.scss";

type ButtonProps = {
  className: string;
  text: string;
  onClick?: () => void;
};

export const Button = ({ className, text, onClick }: ButtonProps) => {
  return (
    <button type="submit" className={className} onClick={onClick}>
      {text}
    </button>
  );
};
