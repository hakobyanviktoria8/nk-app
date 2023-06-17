import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addTask } from "../features/tasksSlice";
import axios from "axios";
import { Input } from "./Input";
import { Button } from "./Button";

export const TaskForm = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    employeeId: "",
  });

  const employees = useSelector((state: RootState) => state.employees.value); 
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("task formData______", formData);
    try {
      if (employees) {
        const response = await axios.post(`${baseUrl}/tasks`, formData);
        // console.log("response task add______", response);
        dispatch(addTask(response.data));
        setFormData({
          name: "",
          description: "",
          startDate: "",
          endDate: "",
          employeeId: "",
        });
      }
    } catch (error) {
      console.error("Error tasks creating______", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        handleChange={handleChange}
      />
      <label htmlFor="description">
        <span>Description:</span>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <Input
        label="Start Date"
        type="date"
        name="startDate"
        value={formData.startDate}
        handleChange={handleChange}
      />
      <Input
        label="End Date"
        type="date"
        name="endDate"
        value={formData.endDate}
        handleChange={handleChange}
      />
      <label htmlFor="employeeId">
        <span>Employee:</span>
        <select
          id="employeeId"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
        >
          <option value="">Select an employee</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.id}. {employee.name}
            </option>
          ))}
        </select>
      </label>
      <Button className="addEmployeeBtn addBtn" text="Create Task" />
    </form>
  );
};
