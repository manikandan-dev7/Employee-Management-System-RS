import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeTable from "../components/EmployeeTable";
import ConfirmationAlert from "../components/ConfirmationAlert";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/employees");
      console.log(res.data, "response data");
      setEmployees(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const confirmDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/employees/${deleteId}`
      );
      setDeleteId(null);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Employee</h2>

        <button
          onClick={() => navigate("/add")}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add Employee
        </button>
      </div>

      <EmployeeTable
        employees={employees}
        onDelete={(id) => setDeleteId(id)}
        onView={(id) => navigate(`/view/${id}`)}
        onEdit={(id) => navigate(`/edit/${id}`)}
      />

      {deleteId && (
        <ConfirmationAlert
          onConfirm={confirmDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
};

export default Employees;