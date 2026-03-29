import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const ConfirmationAlert = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="p-6 bg-white rounded shadow">
        <p className="flex justify-center p-2 text-6xl text-blue-600"><RiDeleteBin6Line /></p>
        <p className="mb-4">Are you sure you want to delete?</p>

        <div className="flex justify-end gap-3">
          <button onClick={onCancel} className="px-3 py-1 text-white bg-red-500 border rounded">
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-3 py-1 text-white bg-blue-500 rounded"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationAlert;