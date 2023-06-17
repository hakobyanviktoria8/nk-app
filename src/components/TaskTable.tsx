import React from "react";
import "./../styles/table.scss";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import axios from "axios";
import { deleteTask } from "../features/tasksSlice";

export const TaskTable = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const tasks = useSelector((state: RootState) => state.tasks.value);
  const dispatch = useDispatch();

  const handleDelete = (id: string | undefined) => {
    axios
      .delete(`${baseUrl}/tasks/${id}`)
      .then(() => {
        dispatch(deleteTask(id));
      })
      .catch((error) => {
        console.error("Error deleting tasks______", error);
      });
  };

  return (
    <>
      {!tasks?.length ? (
        <h2>Loading...</h2>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Employee ID</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.name || "name here"}</td>
                <td>{task.description || "description"}</td>
                <td>{task.startDate || "date"}</td>
                <td>{task.endDate || "date"}</td>
                <td>{task.employeeId || "id"}</td>
                <td>
                  <Button
                    className="deleteEmployeeBtn"
                    text="Delete"
                    onClick={() => handleDelete(task.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
