import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import EmployeeForm from './components/EmployeeForm'
import EmployeeTable from './components/EmployeeTable'
import ConfirmationAlert from './components/ConfirmationAlert'

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <EmployeeForm />
      <EmployeeTable />
      <ConfirmationAlert />
    </div>
  )
}

export default App
