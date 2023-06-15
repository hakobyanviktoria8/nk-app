import React from "react";
import { EmployeeType } from "../pages/Employees";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { openModal } from "../features/isOpenModalSlice";
import { deleteEmployee } from "../features/employeesSlice";
import axios from "axios";

type EmployeeProps = {
  employee: EmployeeType;
};

export const Employee = ({ employee }: EmployeeProps) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const dispatch = useDispatch();

  const handleDelete = (id: string | undefined) => {
    axios
      .delete(`${baseUrl}/employees/${id}`)
      .then(() => {
        dispatch(deleteEmployee(id));
      })
      .catch((error) => {
        console.error("Error deleting employee______", error);
      });
  };

  const handleUpdate = (id: string) => {
    localStorage.setItem("employeeId", id);
    dispatch(openModal());
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
          onClick={() => handleUpdate(employee.id || "")}
        />
        <Button
          className="deleteEmployeeBtn"
          text="Delete"
          onClick={() => handleDelete(employee.id)}
        />
      </div>
    </div>
  );
};
