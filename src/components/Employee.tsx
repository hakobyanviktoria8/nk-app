import React from "react";
import { EmployeeType } from "../pages/Employees";
import { Button } from "./Button";

type EmployeeProps = {
  employee: EmployeeType;
};

export const Employee = ({ employee }: EmployeeProps) => {
  return (
    <div className="employeeCart">
      <p>Name: {employee?.name}</p>
      <p>Surname: {employee?.surname}</p>
      <p>Email: {employee?.email}</p>
      <p>Position: {employee?.position}</p>

      <div className="buttonsWrapper">
        <Button className="addEmployeeBtn" text="Update" />
        <Button className="deleteEmployeeBtn" text="Delete" />
      </div>
    </div>
  );
};
