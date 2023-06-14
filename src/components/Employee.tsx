import React from "react";
import { EmployeeType } from "../pages/Employees";

type EmployeeProps = {
  employee: EmployeeType;
};

export const Employee = ({ employee }: EmployeeProps) => {
  return (
    <div>
      <p>Name: {employee?.name}</p>
      <p>Surname: {employee?.surname}</p>
      <p>Email: {employee?.email}</p>
      <p>Position: {employee?.position}</p>
    </div>
  );
};
