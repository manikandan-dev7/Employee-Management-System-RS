import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./view/UserRoute.js";
import db from "./config/db.js";
import createEmployeeTable from "./model/EmployeeModel.js";

dotenv.config();

const app = express();

//middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

//test route
app.get("/", (res) => {
  res.send("API is running...");
});

//routes
app.use("/api/employees", router);

//connect db and table
db.connect((err)=>{
  if(err){
      console.error("db connection failed:", err);
      return;
  }
  console.log("db connected")
  createEmployeeTable();
})

//port from .env
const PORT = process.env.PORT || 5000;

// server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
