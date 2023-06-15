import React, { useEffect, useState } from "react";
import "./../styles/employees.scss";
import axios from "axios";
import { Employee } from "../components/Employee";
import { ModalComp } from "../components/ModalComp";

export type EmployeeType = {
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  position?: string;
};

export const Employees = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const fetchEmployees = async (page: number) => {
    try {
      const response = await axios.get(
        `${baseUrl}/employees?_page=${page}&_limit=10`
      );
      setEmployees(response.data);
      setTotalPages(Math.ceil(response.headers["x-total-count"] / 10));
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
    fetchEmployees(page);
  };

  useEffect(() => {
    fetchEmployees(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="employees">
      <h1>Employees</h1>
      
      <button className="newEmployee" onClick={openModal}>
        New Employee
      </button>

      {isOpen && <ModalComp isOpen={isOpen} onClose={closeModal} />}

      {!employees.length && <h2>Loading...</h2>}

      <div className="employeeWrapper">
        {employees.map((employee, idx) => (
          <Employee
            employee={employee}
            key={employee.id + idx.toString() + randomNumber.toString()}
          />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePagination(page)}
              className={currentPage === page ? "active" : ""}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};
