import React from "react";
import "./../styles/button.scss";
import { AnyAction } from "@reduxjs/toolkit";

type ButtonProps = {
  className: string;
  text: string;
  onClick?: () => void | AnyAction;
};

export const Button = ({ className, text, onClick }: ButtonProps) => {
  return (
    <button type="submit" className={`${className} btn`} onClick={onClick}>
      {text}
    </button>
  );
};
