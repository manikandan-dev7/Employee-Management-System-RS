import db from "../config/db.js";

const createEmployeeTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS employees(
      employeeId INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(50),
      department VARCHAR(50),
      project VARCHAR(50),
      type VARCHAR(50),
      status VARCHAR(50)
    )
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("error creating table", err);
      return;
    }
    console.log("employees table ready");
  });
};

export default createEmployeeTable;