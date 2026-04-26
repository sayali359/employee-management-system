import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Adminnavbar from './Adminnavbar';

export default function ApproveLeave() {
  const app = process.env.REACT_APP_API_URL;
  const [leaves, setLeaves] = useState([]);

  // Fetch all leave applications
  const fetchLeaves = () => {
    axios
      .get(`${app}/findall`)
      .then((response) => {
        setLeaves(response.data);
      })
      .catch(() => {
        alert("Error fetching leave data");
      });
  };

  // Approve / Reject leave
  const updateStatus = (id, action) => {
    axios
      .put(`${app}/updatestatus?id=${id}&action=${action}`)
      .then(() => {
        fetchLeaves(); // reload after update
      })
      .catch(() => {
        alert("Error updating leave status");
      });
  };

  // Load once
  useEffect(() => {
    fetchLeaves();
  }, []);

  return (
    <div>
      <Adminnavbar />

      <div className="container mt-4">
        <table className="table table-bordered table-striped border-secondary">
          <thead className="table-dark">
            <tr>
              <th>Leave ID</th>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Reason</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {leaves.length > 0 ? (
              leaves.map((l) => (
                <tr key={l.id}>
                  <td>{l.id}</td>
                  <td>{l.eid}</td>
                  <td>{l.firstname}</td>
                  <td>{l.lastname}</td>
                  <td>{l.reason}</td>
                  <td>{l.fromdate}</td>
                  <td>{l.todate}</td>
                  <td>{l.status || "Pending"}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => updateStatus(l.id, "approve")}
                    >
                      Approve
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => updateStatus(l.id, "reject")}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No leave applications found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
