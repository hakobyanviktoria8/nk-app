import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./../styles/modal.scss";
import { Input } from "./Input";
import { Button } from "./Button";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { closeModal } from "../features/isOpenModalSlice";
import { EmployeeType, addEmployee, updateEmployee } from "../features/employeesSlice";

const customStyles = {
  content: {
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "400px",
    width: "400px",
    top: "300px",
  },
};

Modal.setAppElement("#root");

export const ModalComp = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const empId = localStorage.getItem("employeeId");
  const [formData, setFormData] = useState<EmployeeType>({
    name: "",
    surname: "",
    email: "",
    position: "",
  });

  const dispatch = useDispatch();
  const isOpenModal = useSelector(
    (state: RootState) => state.isOpenModal.value
  );

  useEffect(() => {
    if (empId) {
      axios
        .get(`${baseUrl}/employees/${empId}`)
        .then((response) => {
          const { name, surname, email, position } = response.data;
          setFormData({ name, surname, email, position });
        })
        .catch((error) => {
          console.error("Error fetching employee data:", error);
        });
    }
  }, [baseUrl, empId]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (empId) {
        const response = await axios.put(
          `${baseUrl}/employees/${empId}`,
          formData
        );
        dispatch(updateEmployee(response.data));
      } else {
        const response = await axios.post(`${baseUrl}/employees`, formData);
        dispatch(addEmployee(response.data));
      }
      setFormData({ name: "", surname: "", email: "", position: "" });
      dispatch(closeModal());
      localStorage.removeItem("employeeId");
    } catch (error) {
      console.error("Error employee creating______", error);
    }
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={() => dispatch(closeModal())}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className="modalHeader">
        <h2>Employee data</h2>

        <Button
          className="deleteEmployeeBtn"
          text="Close"
          onClick={() => dispatch(closeModal())}
        />
      </div>

      <form onSubmit={handleSubmit} className="modalForm">
        <Input
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          handleChange={handleChange}
        />
        <Input
          label="Surname"
          type="text"
          name="surname"
          value={formData.surname}
          handleChange={handleChange}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          handleChange={handleChange}
        />
        <Input
          label="Position"
          type="text"
          name="position"
          value={formData.position}
          handleChange={handleChange}
        />
        <div className="buttonsWrapper">
          <Button className="addEmployeeBtn addBtn" text="Add" />
        </div>
      </form>
    </Modal>
  );
};
