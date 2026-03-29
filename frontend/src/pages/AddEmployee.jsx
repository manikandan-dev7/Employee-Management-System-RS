import EmployeeForm from "../components/EmployeeForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    console.log("Sending to backend:", data);

    try {
      await axios.post("http://localhost:5000/api/employees/add", data);
      navigate("/");
    } catch (err) {
      console.log("API ERROR:", err);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Add Employee</h2>
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEmployee;