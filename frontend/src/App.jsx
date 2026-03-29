import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from "./pages/HomePage";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import ViewEmployee from "./pages/ViewEmployee";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <div className="p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Employees />} />
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/edit/:id" element={<EditEmployee />} />
            <Route path="/view/:id" element={<ViewEmployee />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
