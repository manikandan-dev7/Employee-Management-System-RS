import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeForm = ({ onSubmit, initialData }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    employeeId: "",
    department: "",
    designation: "",
    project: "",
    type: "",
    status: "",
    image: "",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FORM SUBMIT", form);
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow">
      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <input
          name="employeeId"
          type="number"
          placeholder="Employee ID"
          value={form.employeeId}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <input
          name="designation"
          placeholder="Designation"
          value={form.designation}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <input
          name="project"
          placeholder="Project"
          value={form.project}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">Select Type</option>
          <option value="Office">Office</option>
          <option value="Remote">Remote</option>
        </select>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">Select Status</option>
          <option value="Permanent">Permanent</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="px-4 py-2 border rounded"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
