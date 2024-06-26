import React from 'react'
import Sidebar from '../../components/admin/Sidebar'
import Navbar from '../../components/admin/Navbar'
import Dashboard from '../../components/admin/Dashboard'

const Admin = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Dashboard />
    </>
  )
}

export default Admin