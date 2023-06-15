import React, { useState } from "react";
import Modal from "react-modal";
import "./../styles/modal.scss";
import { EmployeeType } from "../pages/Employees";
import { Input } from "./Input";
import { Button } from "./Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

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

export const ModalComp = ({ isOpen, onClose }: ModalProps) => {
  const [formData, setFormData] = useState<EmployeeType>({
    name: "",
    surname: "",
    email: "",
    position: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // addEmployee(formData);
    setFormData({ name: "", surname: "", email: "", position: "" });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className="modalHeader">
        <h2>Employee data</h2>
        <button onClick={onClose}>close</button>
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
          <Button className="addEmployeeBtn" text="Add" />
        </div>
      </form>
    </Modal>
  );
};
