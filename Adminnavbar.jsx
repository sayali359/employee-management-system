import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function Adminnavbar() {
  let navigate=useNavigate();
  let logout=()=>
  {
     navigate("/");
  }
  let user=JSON.parse(localStorage.getItem("userinfo"));

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand text-light fs-1" href="#">EMS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
         <li class="nav-item">
        <Link to="/home" className="nav-link active text-light fs-4">Home</Link>

        </li>
       <li class="nav-item">
        <Link to="/addemp" className="nav-link  text-light fs-4">Add employee</Link>
        </li>

        <li class="nav-item">
          <Link to="/getemp" className="nav-link text-light fs-4">Get employee</Link>
        </li>

        <li class="nav-item">
          <Link to="/approveleave" className="nav-link text-light fs-4">Approve Leave</Link>
        </li>



         <li class="nav-item">
        <Link to="/aboutus" className="nav-link active text-light fs-4">Aboutus</Link>
        </li>

         <li class="nav-item">
        <Link to="/contactus" className="nav-link active text-light fs-4">Contactus</Link>
        </li>

         <li class="nav-item">
        <Link to="/service" className="nav-link active text-light fs-4">Service</Link>
        </li>

        
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}

       <p className="text-light fs-4  P-3" style={{"paddingRight":"20px"}}><strong>Welcome, {user.firstname}</strong></p>

      <button classname="btn btn-danger text-light fs-4" onClick={logout}> logout</button>
      
    </div>
  </div>
</nav>
 </div>
  )
}
