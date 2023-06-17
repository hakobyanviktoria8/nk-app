import React, { useEffect, useState } from "react";
import { TaskForm } from "../components/TaskForm";
import { Pagination } from "../components/Pagination";
import "./../styles/tasks.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getTasks } from "../features/tasksSlice";
import { TaskTable } from "../components/TaskTable";

export const Tasks = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();

  const fetchTasks = async (page: number) => {
    try {
      const response = await axios.get(
        `${baseUrl}/tasks?_page=${page}&_limit=5`
      );
      console.log("response tasks___________", response);
      dispatch(getTasks(response.data));
      setTotalPages(Math.ceil(response.headers["x-total-count"] / 5));
    } catch (error) {
      console.error("Error tasks set____", error);
    }
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
    fetchTasks(page);
  };

  useEffect(() => {
    fetchTasks(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className="tasks">
      <h1>Tasks</h1>
      <TaskForm />

      <h2>Tasks table</h2>
      <TaskTable />

      <Pagination
        totalPages={totalPages}
        handlePagination={handlePagination}
        currentPage={currentPage}
      />
    </div>
  );
};
