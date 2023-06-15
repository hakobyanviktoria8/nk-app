import React from "react";
import { EmployeeType } from "../pages/Employees";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { openModal } from "../features/isOpenModalSlice";

type EmployeeProps = {
  employee: EmployeeType;
};

export const Employee = ({ employee }: EmployeeProps) => {
  const dispatch = useDispatch();

  const handleDetele = (id: string | undefined) => {
    // filter employee data
    console.log("Detele id________", id);
  };

  const handleUpdate = (id: string | undefined) => {
    dispatch(openModal());
    // set employee dta here
    console.log("Update id________", id);
  };

  return (
    <div className="employeeCart">
      <p>Name: {employee?.name}</p>
      <p>Surname: {employee?.surname}</p>
      <p>Email: {employee?.email}</p>
      <p>Position: {employee?.position}</p>

      <div className="buttonsWrapper">
        <Button
          className="addEmployeeBtn"
          text="Update"
          onClick={() => handleUpdate(employee.id)}
        />
        <Button
          className="deleteEmployeeBtn"
          text="Delete"
          onClick={() => handleDetele(employee.id)}
        />
      </div>
    </div>
  );
};
