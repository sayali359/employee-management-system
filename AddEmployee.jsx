import React, { use } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Adminnavbar from './Adminnavbar';

export default function AddEmployee() {
   let app=process.env.REACT_APP_API_URL;

    let[firstname,setFirstname]=useState("");
    let[lastname,setLastname]=useState("");
    let[email,setEmail]=useState("");
    let[contactno,setContactno]=useState("");
    let[gender,setGender]=useState("");
    let[dob,setDob]=useState("");
    let[adharcardno,setAdharcardno]=useState("");
    let[panno,setPanno]=useState("");
    let[joiningdate,setJoiningdate]=useState("");
    let[dept,setDept]=useState("");
    let[designation,setDesignation]=useState("");
    let[salary,setSalary]=useState("");
    let[reportingmanager,setReportingmanager]=useState("");
    let[exp,setExp]=useState(0);
    let[address,setAddress]=useState("");
    let [status,setStatus]=useState("");
    let[profile,setProfile]=useState("");
    
    let handleProfile=(event)=>
    {
        let file=event.target.files[0];
        console.log("img data " +file.name);
        let fullpath=`./img/${file.name}`;
        console.log("full path" +fullpath);
        setProfile(fullpath);

 
    }
    let addempdata=(e)=>{    
      e.preventDefault();

      if (!firstname.trim()) {
  alert("First name is required");
  return;
}
if (!/^[A-Za-z\s]+$/.test(firstname)) {
  alert("First name should contain only alphabets");
  return;
}

// Last Name
if (!lastname.trim()) {
  alert("Last name is required");
  return;
}
if (!/^[A-Za-z\s]{2,20}$/.test(lastname)) {
  alert("Last name must be contain only digits");
  return;
}

// Email
if (!email.trim()) {
  alert("Email is required");
  return;
}
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  alert("Please enter a valid email address");
  return;
}

// Contact Number
if (!contactno.trim()) {
  alert("Contact number is required");
  return;
}
if (!/^\d{10}$/.test(contactno)) {
  alert("Contact number must be exactly 10 digits");
  return;
}

// Aadhar Number
if (!adharcardno.trim()) {
  alert("Aadhar number is required");
  return;
}
if (!/^\d{12}$/.test(adharcardno)) {
  alert("Aadhar number must be exactly 12 digits");
  return;
}

// PAN Number
if (!panno.trim()) {
  alert("PAN number is required");
  return;
}
if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panno)) {
  alert("Invalid PAN number format (ABCDE1234F)");
  return;
}



    
    
let employee={firstname,lastname,email,contactno,gender,dob,adharcardno,panno,joiningdate,dept,designation,salary,reportingmanager,exp,address,status,profile}
        axios.post(`${app}/savedata`,employee)
        
        .then((response)=>
        {
          if(response.data="save data sucessfully")
          {
            alert("save data sucessfully")
          }
          else{
            alert("error  occurred")
          }
        })
        .catch((error)=>
        {
          console.log(error);
        })
      }
       return (
        <div>
          <Adminnavbar></Adminnavbar>
        <form onSubmit={addempdata}>

        <div className="row g-3">

          {/* First Name */}
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input type="text" name="firstname" className="form-control" required onChange={(e)=>{setFirstname(e.target.value)}}/>
          </div>

          {/* Last Name */}
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input type="text" name="lastname" className="form-control" onChange={(e)=>{setLastname(e.target.value)}}/>
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" required
            onChange={(e)=>{setEmail(e.target.value)}} />
          </div>

          {/* Contact No */}
          <div className="col-md-6">
            <label className="form-label">Contact Number</label>
            <input type="tel" name="contactno" className="form-control" required
            maxLength={10}
            onChange={(e)=>{setContactno(e.target.value)}} />
          </div>

          {/* Gender */}
          <div className="col-md-4">
            <label className="form-label">Gender</label>
            <select name="gender" className="form-select" required onChange={(e)=>{setGender(e.target.value)}}>
              <option value="">Choose…</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* DOB */}
          <div className="col-md-4">
            <label className="form-label">Date of Birth</label>
            <input type="date" name="dob" className="form-control" required onChange={(e)=>{setDob(e.target.value)}}/>
          </div>

          {/* Aadhar */}
          <div className="col-md-4">
            <label className="form-label">Aadhar Number</label>
            <input type="tel" name="aadharno" className="form-control" 
            maxLength={12}
            onChange={(e)=>{setAdharcardno(e.target.value)}}/>
          </div>

          {/* PAN */}
          <div className="col-md-4">
            <label className="form-label">PAN Number</label>
            <input type="text" name="panno" className="form-control" onChange={(e)=>{setPanno(e.target.value)}}/>
          </div>

          {/* Joining Date */}
          <div className="col-md-4">
            <label className="form-label">Joining Date</label>
            <input type="date" name="joiningdate" className="form-control" onChange={(e)=>{setJoiningdate(e.target.value)}} />
          </div>

          {/* Department */}
          <div className="col-md-4">
            <label className="form-label">Department</label>
            <input type="text" name="dept" className="form-control" onChange={(e)=>{setDept(e.target.value)}}/>
          </div>

          {/* Designation */}
          <div className="col-md-6">
            <label className="form-label">Designation</label>
            <input type="text" name="designation" className="form-control" onChange={(e)=>{setDesignation(e.target.value)}}/>
          </div>

          {/* Salary / Package */}
          <div className="col-md-6">
            <label className="form-label">Salary / Annual Package (₹)</label>
            <input type="number" step="0.01" name="salary" className="form-control" placeholder="Enter CTC" onChange={(e)=>{setSalary(e.target.value)}}/>
          </div>

          {/* Experience */}
          <div className="col-md-6">
            <label className="form-label">Experience (Years)</label>
            <input type="number" step="0.1" name="exp" className="form-control" onChange={(e)=>{setExp(e.target.value)}}/>
          </div>

          {/* Reporting Manager */}
          <div className="col-md-6">
            <label className="form-label">Reporting Manager</label>
            <input type="text" name="reportingmanager" className="form-control" onChange={(e)=>{setReportingmanager(e.target.value)}}/>
          </div>

          {/* Employment Status */}
          <div className="col-md-6">
            <label className="form-label">Status</label>
            <select name="status" className="form-select" onChange={(e)=>{setStatus(e.target.value)}}>
              <option value="">Choose…</option>
              <option>Active</option>
              <option>Probation</option>
              <option>On Leave</option>
              <option>Resigned</option>
              <option>Terminated</option>
            </select>
          </div>

          {/* Address */}
          <div className="col-12">
            <label className="form-label">Address</label>
            <textarea className="form-control" name="address" rows="3" onChange={(e)=>{setAddress(e.target.value)}}></textarea>
          </div>

          {/* Profile Upload */}
          <div className="col-md-6">
            <label className="form-label">Profile (Photo / Resume)</label>
            <input type="file" name="profile" className="form-control" accept="image/*" onChange={(event)=>{handleProfile(event)}} />
            <label className="form-label">Pre</label>
          </div>

        </div>

       <div className="mt-4">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="reset" className="btn btn-secondary ms-2">Reset</button>

        </div>
        <div className='col-md-6'>
            <label className='form-label'>Preview of profile</label>
            <img src={profile} width="150px"></img>
        </div>

      </form>
    </div>

  )
    }
  



