import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EmployeeForm from "../components/EmployeeForm";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/employees/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await axios.put(
        `http://localhost:5000/api/employees/${id}`,
        formData
      );
      alert("Employee updated successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Failed to update employee");
    }
  };

  return data ? (
    <div>
      <h2 className="text-xl font-semibold">Edit Employee</h2>
      <EmployeeForm onSubmit={handleSubmit} initialData={data} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default EditEmployee;