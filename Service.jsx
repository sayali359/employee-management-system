import React from 'react'
import Adminnavbar from './Adminnavbar'
import EmpNavbar from './EmpNavbar'

export default function Service() {
  let user=JSON.parse(localStorage.getItem("userinfo"))
  return (
    <div>
      {/* <Adminnavbar></Adminnavbar> */}
      {user.role=="ADMIN"?<Adminnavbar></Adminnavbar>:<EmpNavbar></EmpNavbar>}
        
    <div className="container mt-5">

      {/* Page Title */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">Our Services</h1>
        <p className="text-muted">
          Services offered by the Employee Management System
        </p>
      </div>

      {/* Services Section */}
      <div className="row text-center mb-5">
        <div className="col-md-4">
          <h4>Employee Record Management</h4>
          <p>
            Maintain complete employee information including personal,
            professional, and contact details in a centralized system.
          </p>
        </div>

        <div className="col-md-4">
          <h4>Department & Designation Management</h4>
          <p>
            Organize employees based on departments and job roles for
            better management and reporting.
          </p>
        </div>

        <div className="col-md-4">
          <h4>Salary & Experience Tracking</h4>
          <p>
            Track employee salary details, work experience, and employment
            history efficiently.
          </p>
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-md-4">
          <h4>Secure Login System</h4>
          <p>
            Role-based authentication ensures data security and controlled
            access to employee information.
          </p>
        </div>

        <div className="col-md-4">
          <h4>Search & Reports</h4>
          <p>
            Quickly search employee records and generate detailed reports
            for analysis and decision-making.
          </p>
        </div>

        <div className="col-md-4">
          <h4>System Support</h4>
          <p>
            Provides reliable support and easy system maintenance for
            smooth organizational operations.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-muted">
        <p>© 2025 Employee Management System | All Rights Reserved</p>
      </div>

    </div>
  


        </div>
  )
}
