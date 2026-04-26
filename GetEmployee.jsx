import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Adminnavbar from './Adminnavbar';

export default function GetEmployee() {
  const app = process.env.REACT_APP_API_URL;

  const [employees, setEmployees] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const [searchFirstname, setSearchFirstname] = useState("");
  const [searchLastname, setSearchLastname] = useState("");
  const [searchDesignation, setSearchDesignation] = useState("");
  const [searchDept, setSearchDept] = useState("");

  const navigate = useNavigate();

  // Fetch all employees (runs once)
  useEffect(() => {
    axios.get(`${app}/findAll`)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch(() => {
        alert("Error fetching employee data");
      });
  }, [app]);

  // Search functions
  const searchByFirstname = () => {
    axios.get(`${app}/findByFirstname?firstname=${searchFirstname}`)
      .then((response) => {
        setSearchResult(response.data);
        setSearchFirstname("");
      })
      .catch(() => {
        alert("Error in search by firstname");
      });
  };

  const searchByLastname = () => {
    axios.get(`${app}/findByLastname?lastname=${searchLastname}`)
      .then((response) => {
        setSearchResult(response.data);
        setSearchLastname("");
      })
      .catch(() => {
        alert("Error in search by lastname");
      });
  };

  const searchByDesignation = () => {
    axios.get(`${app}/findByDesignation?designation=${searchDesignation}`)
      .then((response) => {
        setSearchResult(response.data);
        setSearchDesignation("");
      })
      .catch(() => {
        alert("Error in search by designation");
      });
  };

  const searchByDept = () => {
    axios.get(`${app}/findByDept?dept=${searchDept}`)
      .then((response) => {
        setSearchResult(response.data);
        setSearchDept("");
      })
      .catch(() => {
        alert("Error in search by department");
      });
  };

  // Delete employee
  const deleteEmp = (empid) => {
    axios.delete(`${app}/deletebyempid?empid=${empid}`)
      .then(() => {
        alert("Employee record deleted successfully");
        setEmployees(employees.filter(emp => emp.eid !== empid));
        setSearchResult(searchResult.filter(emp => emp.eid !== empid));
      })
      .catch(() => {
        alert("Error in delete operation");
      });
  };

  const dataToShow = searchResult.length > 0 ? searchResult : employees;

  return (
    <div>
      <Adminnavbar />

      {/* Search Section */}
      <div className="container mt-3">
        <div className="row g-2">
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by firstname"
              value={searchFirstname}
              onChange={(e) => setSearchFirstname(e.target.value)}
            />
            <button className="btn btn-warning mt-1" onClick={searchByFirstname}>
              Search
            </button>
          </div>

          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by lastname"
              value={searchLastname}
              onChange={(e) => setSearchLastname(e.target.value)}
            />
            <button className="btn btn-warning mt-1" onClick={searchByLastname}>
              Search
            </button>
          </div>

          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by designation"
              value={searchDesignation}
              onChange={(e) => setSearchDesignation(e.target.value)}
            />
            <button className="btn btn-warning mt-1" onClick={searchByDesignation}>
              Search
            </button>
          </div>

          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by department"
              value={searchDept}
              onChange={(e) => setSearchDept(e.target.value)}
            />
            <button className="btn btn-warning mt-1" onClick={searchByDept}>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Employee Cards */}
      <div className="container mt-4">
        <div className="row">
          {dataToShow.map((emp) => (
            <div className="card col-3 m-2" style={{ width: "18rem" }} key={emp.eid}>
              <img src={emp.profile} className="card-img-top" alt="Employee" />
              <div className="card-body">
                <h5 className="card-title">
                  {emp.firstname} {emp.lastname}
                </h5>

                <p>Email: <strong>{emp.email}</strong></p>
                <p>Contact: <strong>{emp.contactno}</strong></p>
                <p>Department: <strong>{emp.dept}</strong></p>
                <p>Designation: <strong>{emp.designation}</strong></p>
                <p>Salary: <strong>{emp.salary}</strong></p>
                <p>DOB: <strong>{emp.dob}</strong></p>

                <button
                  className="btn btn-success me-2"
                  onClick={() => deleteEmp(emp.eid)}
                >
                  Delete
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => navigate(`/updateemp/${emp.eid}`)}
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
