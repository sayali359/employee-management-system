import React from 'react'
import Adminnavbar from './Adminnavbar'
import EmpNavbar from './EmpNavbar'

 
export default function Contactus() {
  let user=JSON.parse(localStorage.getItem("userinfo"));
  return (
    <div>
      {user.role=="Admin"?<Adminnavbar></Adminnavbar>:<EmpNavbar></EmpNavbar>}

<div className="container mt-5">

      {/* Page Title */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-muted">
          Feel free to contact us for any queries related to the Employee Management System
        </p>
      </div>

      {/* Contact Details */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h4>Get in Touch</h4>
          <p>
            Employee Management System <br />
            HR Solutions Pvt. Ltd. <br />
            Pune, Maharashtra, India
          </p>

          <p><strong>Email:</strong> support@ems.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <h4>Send Message</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
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
