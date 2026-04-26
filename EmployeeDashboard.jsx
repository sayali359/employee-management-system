import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import EmpNavbar from './EmpNavbar';
export default function EmployeeDashboard() {
    let app=process.env.REACT_APP_API_URL;

 let [employees, setEmployees] = useState([]);
    // let navigate = useNavigate();

    let [searchResult,setSearchresult]=useState([]);
    let [searchfirstname,setSearchFirstname]=useState("");
    let [searchlastname,setSearchLastname]=useState("");
    let [searchdesig,setSearchDesig]=useState("");
    let [searchdept,setSearchDept]=useState("");
                    
    let searchbyfirstname=()=>
    {
        axios.get(`${app}/findByFirstname?firstname=${searchfirstname}`)
        .then((response)=>{
         setSearchresult(response.data)
         setSearchFirstname("");

        })
        .catch(()=>
        {
           alert("Error in search by firstname operation....")
        })
    }

    let searchbylastname=()=>
    {
        axios.get(`${app}/findByLastname?lastname=${searchlastname}`)
        .then((response)=>{
         setSearchresult(response.data)
         setSearchLastname("");

        })
        .catch(()=>
        {
           alert("Error in search by lastname operation....")
        })
    }
    let searchbydesig=()=>
    {
        axios.get(`${app}/findByDesignation?designation=${searchdesig}`)
        .then((response)=>{
         setSearchresult(response.data)
         setSearchDesig("");

        })
        .catch(()=>
        {
           alert("Error in search by desig operation....")
        })
    }

     let searchbydept=()=>
    {
        axios.get(`${app}/findByDept?dept=${searchdept}`)
        .then((response)=>{
         setSearchresult(response.data)
         setSearchDept("");

        })
        .catch(()=>
        {
           alert("Error in search by dept operation....")
        })
    }





    useEffect(() => {
        axios.get(`${app}/findAll`)
        .then((response)=>{
            setEmployees(response.data);
            
        })
        .catch((error)=>{
            alert(error);
        })
    }, [employees]);


    let deleteemp=(empid)=>
    {
        axios.delete(`${app}/deletebyempid?empid=${empid}`)
       

        .then((response)=>{
            if(response.data)
        {
            alert("Student Reccord Deleted Successfully")
            
        }
    })
    .catch((error)=>
    {
        alert("error in deleted operation")
    })
}
    

  return (
    <div>
       
        <EmpNavbar></EmpNavbar>
        <h1 className="w-100 bg-success text-light fs-1 text-center" style={{"height":"50px"}}>Welcome to EmployeeDashboard</h1>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <input type="text" placeholder="Search by firstname" value={searchfirstname} onChange={(e)=>{setSearchFirstname(e.target.value)}}></input>
                    <button className="btn btn-warning" onClick={searchbyfirstname}></button>
                </div>
                <div className="col-3">
                    <input type="text" placeholder="Search by lastname"  value={searchlastname} onChange={(e)=>{setSearchLastname(e.target.value)}}></input>
                    <button className="btn btn-warning" onClick={searchbylastname}></button>
                </div>
                <div className="col-3">
                    <input type="text" placeholder="Search by desig" value={searchbydesig} onChange={(e)=>{setSearchDesig(e.target.value)}}></input>
                    <button className="btn btn-warning" onClick={searchbydesig}></button>
                </div>
                <div className="col-3">
                    <input type="text" placeholder="Search by dept"  value={searchdept}onChange={(e)=>{setSearchDept(e.target.value)}}></input>
                    <button className="btn btn-warning" onClick={searchbydept}></button>
                </div>


            </div>
        </div>
        
            <div className="container">
                <div className="row">
                {
                   (searchResult.length>0?searchResult:employees).map((emp)=>
                   <div class="card col-4 " style={{width: "18rem"}}>
  <img src={emp.profile} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{emp.firstname}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{emp.lastname}</h5>    <p class="card-text">
        <p> Email:<strong>{emp.email}</strong></p>
        <p> Contact No:<strong>{emp.contactno}</strong></p>
        <p> Department:<strong>{emp.dept}</strong></p>
        <p> Designation:<strong>{emp.designation}</strong></p>
        <p> Salary:<strong>{emp.salary}</strong></p>
        <p> DOB:<strong>{emp.dob}</strong></p>
        
    </p>
        {/* <button className="btn btn-success" onClick={()=>{deleteemp(emp.eid)}}>Delete</button>
        <button className="btn btn-danger " onClick={()=>{navigate(`/updateemp/${emp.eid}`)}}>Update</button> */}
      </div>
 </div>
        ) }
                </div>
                </div>

    </div>
  )
}
