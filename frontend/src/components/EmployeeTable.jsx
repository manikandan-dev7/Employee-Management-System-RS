import { FaRegEye } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const EmployeeTable = ({ employees = [], onDelete, onView, onEdit }) => {
  return (
    <div className="bg-white rounded shadow">
      <table className="w-full text-center table-fixed">
        <thead className="text-sm text-gray-500 border-b">
          <tr>
            <th className="w-1/12 p-2">Name</th>
            <th className="w-1/12 p-2">ID</th>
            <th className="w-1/12 p-2">Department</th>
            <th className="w-1/12 p-2">Designation</th>
            <th className="w-1/12 p-2">Project</th>
            <th className="w-1/12 p-2">Type</th>
            <th className="w-1/12 p-2">Status</th>
            <th className="w-1/12 p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="8" className="py-6 text-center">
                No records found
              </td>
            </tr>
          ) : (
            employees.map((emp) => (
              <tr key={emp.id} className="border-b">
                <td className="p-2 align-middle">{emp.name}</td>
                <td className="p-2 align-middle">{emp.employeeId}</td>
                <td className="p-2 align-middle">{emp.department}</td>
                <td className="p-2 align-middle">{emp.designation}</td>
                <td className="p-2 align-middle">{emp.project}</td>
                <td className="p-2 align-middle">{emp.type}</td>
                <td className="p-2 align-middle">{emp.status}</td>

                <td className="p-2 text-center align-middle">
                  <button onClick={() => onView(emp.employeeId)}>
                    <FaRegEye className="inline mx-1 hover:text-green-600" />
                  </button>

                  <button onClick={() => onEdit(emp.employeeId)}>
                    <LuPencilLine className="inline mx-1 hover:text-blue-500" />
                  </button>

                  <button onClick={() => onDelete(emp.employeeId)}>
                    <RiDeleteBin6Line className="inline mx-1 hover:text-red-500" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;