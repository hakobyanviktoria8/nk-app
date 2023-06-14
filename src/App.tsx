import React from "react";
import { Routes, Route } from "react-router-dom";
import { Employees } from "./pages/Employees";
import { Tasks } from "./pages/Tasks";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default App;
