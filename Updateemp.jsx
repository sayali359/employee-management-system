import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Updateemp() {
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
        let info=useParams();
        let empid=info.empid;
        let  navigate= useNavigate();

        let handleProfile=(event)=>{


        let file=event.target.files[0];
        console.log("img data " +file.name);
        let fullpath=`./img/${file.name}`;
        console.log("full path" +fullpath);
        setProfile(fullpath);

        }
        useEffect(()=>
        {
          axios.get(`${app}/findbyempid?empid=${empid}`)
          .then((response)=>
          {
             let data=response.data;
             setFirstname(data.firstname);
             setLastname(data.lastname);
             setEmail(data.email);
             setContactno(data.contactno);
             setAddress(data.address);
             setGender(data.gender);
             setDob(data.dob);
             setDesignation(data.designation);
             setExp(data.exp);
             setJoiningdate(data.joiningdate);
             setStatus(data.status);
             setReportingmanager(data.reportingmanager);
             setSalary(data.salary);
             setPanno(data.panno);
             setDept(data.dept);


          })
          .catch((error)=>
          {


          })
        },[empid])


        let updateemployee=(event)=>
        {
          event.preventDefault()
          
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
if (!contactno || !/^\d{10}$/.test(contactno)) {
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


          let newemp={firstname,lastname,email,contactno,gender,dob,adharcardno,panno,joiningdate,dept,designation,salary,reportingmanager,exp,address,status,profile}
          axios.put(`${app}/updateemployee?empid=${empid}`,newemp)
          .then((response)=>
          {
             if(response.data="employee updated sucessfully");
             {
              alert(response.data);
              navigate(-1);
             }

            })
             .catch((error)=>
          {
   alert("error in update....");
          })
        }
      
     
  return (

    <div>

         <form onSubmit={updateemployee}>

        <div className="row g-3">

          {/* First Name */}
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input type="text" name="firstname" className="form-control" value={firstname}required onChange={(e)=>{setFirstname(e.target.value)}}/>

          </div>

          {/* Last Name */}
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input type="text" name="lastname" className="form-control" value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/>
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={email} required onChange={(e)=>{setEmail(e.target.value)}} />
          </div>

          {/* Contact No */}
          <div className="col-md-6">
            <label className="form-label">Contact Number</label>
            <input type="tel" name="contactno" className="form-control" value={contactno}required 
            maxLength={10}
            onChange={(e)=>{setContactno(e.target.value)}} />
          </div>

          {/* Gender */}
          <div className="col-md-4">
            <label className="form-label">Gender</label>
            <select name="gender" className="form-select" required value= {gender} onChange={(e)=>{setGender(e.target.value)}}>
              <option value="">Choose…</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* DOB */}
          <div className="col-md-4">
            <label className="form-label">Date of Birth</label>
            <input type="date" name="dob" className="form-control" value={dob} required onChange={(e)=>{setDob(e.target.value)}}/>
          </div>

          {/* Aadhar */}
          <div className="col-md-4">
            <label className="form-label">Aadhar Number</label>
            <input type="tel" name="aadharno" className="form-control" value= {adharcardno}
            maxLength={12}
        onChange={(e)=>{setAdharcardno(e.target.value)}}/>
          </div>

          {/* PAN */}
          <div className="col-md-4">
            <label className="form-label">PAN Number</label>
            <input type="text" name="panno" className="form-control" value={panno} onChange={(e)=>{setPanno(e.target.value)}}/>
          </div>

          {/* Joining Date */}
          <div className="col-md-4">
            <label className="form-label">Joining Date</label>
            <input type="date" name="joiningdate" className="form-control" value={joiningdate}onChange={(e)=>{setJoiningdate(e.target.value)}} />
          </div>

          {/* Department */}
          <div className="col-md-4">
            <label className="form-label">Department</label>
            <input type="text" name="dept" className="form-control" value={dept} onChange={(e)=>{setDept(e.target.value)}}/>
          </div>

          {/* Designation */}
          <div className="col-md-6">
            <label className="form-label">Designation</label>
            <input type="text" name="designation" className="form-control" value={designation}onChange={(e)=>{setDesignation(e.target.value)}}/>
          </div>

          {/* Salary / Package */}
          
          <div className="col-md-6">
            <label className="form-label">Salary / Annual Package (₹)</label>
            <input type="number" step="0.01" name="salary" className="form-control" placeholder="Enter CTC" value={salary}onChange={(e)=>{setSalary(e.target.value)}}/>
          </div>

          {/* Experience */}

          <div className="col-md-6">
            <label className="form-label">Experience (Years)</label>
            <input type="number" step="0.1" name="exp" className="form-control" value={exp} onChange={(e)=>{setExp(e.target.value)}}/>
          </div>

          {/* Reporting Manager */}

          <div className="col-md-6">
            <label className="form-label">Reporting Manager</label>
            <input type="text" name="reportingmanager" className="form-control" value={reportingmanager}onChange={(e)=>{setReportingmanager(e.target.value)}}/>
          </div>

          {/* Employment Status */}
          <div className="col-md-6">
            <label className="form-label">Status</label>
            <select name="status" className="form-select" value={status} onChange={(e)=>{setStatus(e.target.value)}}>
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
            <textarea className="form-control" name="address" rows="3" value={address} onChange={(e)=>{setAddress(e.target.value)}}></textarea>
          </div>

          {/* Profile Upload */}
          <div className="col-md-6">
            <label className="form-label">Profile (Photo / Resume)</label>
            <input type="file" name="profile" className="form-control" accept="image/*,application/pdf" onChange={(event)=>{handleProfile(event)}} />
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