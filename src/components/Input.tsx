import React from "react";
import "./../styles/input.scss";

type InputType = {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  label,
  type,
  name,
  value,
  handleChange,
}: InputType) => {
  return (
    <label>
      <span>{label}: </span>
      <input type={type} name={name} value={value} onChange={handleChange} />
    </label>
  );
};
