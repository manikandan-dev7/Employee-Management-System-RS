import db from "../config/db.js";

//Get All
export const getEmployees = (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

//GET ONE
export const getEmployee = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM employees WHERE employeeId = ?",
    [id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result[0]);
    },
  );
};

//ADD
export const addEmployee = (req, res) => {
  const data = req.body;

  const sql = `
    INSERT INTO employees 
    (name, employeeId, department, designation, project, type, status)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      data.name,
      data.employeeId,
      data.department,
      data.designation,
      data.project,
      data.type,
      data.status,
    ],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json("Employee added");
    },
  );
};

//UPDATE
export const updateEmployee = (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const sql = `
    UPDATE employees 
    SET name=?, employeeId=?, department=?, designation=?, project=?, type=?, status=? 
    WHERE employeeId=?
  `;

  db.query(
    sql,
    [
      data.name,
      data.employeeId,
      data.department,
      data.designation,
      data.project,
      data.type,
      data.status,
      id,
    ],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json("Employee updated");
    },
  );
};

//DELETE
export const deleteEmployee = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM employees WHERE employeeId = ?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json("Employee deleted");
  });
};
