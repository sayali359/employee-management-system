import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmpNavbar from './EmpNavbar';

export default function LeaveApplication() {
  const app = process.env.REACT_APP_API_URL;

  const [eid, setEid] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [reason, setReason] = useState("");
  const [fromdate, setFromdate] = useState("");
  const [todate, setTodate] = useState("");

  // Load user data once when component mounts
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userinfo"));
    if (user) {
      setEid(user.eid);
      setFirstname(user.firstname);
      setLastname(user.lastname);
    }
  }, []);

  const applyforleave = (e) => {
    e.preventDefault();

    // Date validation
    if (fromdate > todate) {
      alert("To Date cannot be before From Date");
      return;
    }

    const leavedata = {
      eid,
      firstname,
      lastname,
      reason,
      fromdate,
      todate
    };

    axios
      .post(`${app}/apply`, leavedata)
      .then(() => {
        alert("Leave applied successfully");

        // Optional: reset fields
        setReason("");
        setFromdate("");
        setTodate("");
      })
      .catch((error) => {
        console.error(error);
        alert("Error in applying for leave");
      });
  };

  return (
    <div>
      <EmpNavbar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">

              <div className="card-header bg-primary text-white text-center">
                <h4>Leave Application Form</h4>
              </div>

              <div className="card-body">
                <form onSubmit={applyforleave}>

                  <div className="mb-3">
                    <label className="form-label">Employee ID</label>
                    <input
                      type="number"
                      className="form-control"
                      value={eid}
                      readOnly
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={firstname}
                      readOnly
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={lastname}
                      readOnly
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Reason for Leave</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">From Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={fromdate}
                      onChange={(e) => setFromdate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">To Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={todate}
                      onChange={(e) => setTodate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">
                      Apply Leave
                    </button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
