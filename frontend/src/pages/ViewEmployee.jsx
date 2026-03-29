import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ViewEmployee = () => {
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

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-white rounded shadow">

      <h2 className="mb-4 text-lg font-bold">Employee Details</h2>

      <div className="grid grid-cols-2 gap-4">

        <input value={data.name} readOnly className="p-2 border" />
        <input value={data.employeeId} readOnly className="p-2 border" />

        <input value={data.department} readOnly className="p-2 border" />
        <input value={data.designation} readOnly className="p-2 border" />

        <input value={data.project} readOnly className="p-2 border" />
        <input value={data.type} readOnly className="p-2 border" />

        <input value={data.status} readOnly className="p-2 border" />

      </div>

      {data.image && (
        <div className="mt-4">
          <p>Image:</p>
          <img
            src={data.image}
            alt="employee"
            className="border w-28 h-28"
          />
        </div>
      )}
      <button 
        onClick={() => navigate("/")}
        className="px-4 py-2 mt-5 text-white bg-blue-500 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default ViewEmployee;