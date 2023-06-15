import React, { useState } from "react";
import Modal from "react-modal";
import "./../styles/modal.scss";
import { EmployeeType } from "../pages/Employees";
import { Input } from "./Input";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { closeModal } from "../features/isOpenModalSlice";
import axios from "axios";

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
  const baseUrl = `${process.env.REACT_APP_BASE_URL}/employees`;
  // console.log("baseUrl__________", baseUrl);

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
      const response = await axios.post(baseUrl, formData);
      console.log("handleSubmit response", response);
      // add employee state here
      setFormData({ name: "", surname: "", email: "", position: "" });
      dispatch(closeModal());
      console.log("formData_____", formData);
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
