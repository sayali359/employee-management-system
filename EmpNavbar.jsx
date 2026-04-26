import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function EmpNavbar() {
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
        <Link to="/leaveapplication" className="nav-link  text-light fs-4">Apply for leave</Link>

        </li>
        
          <li class="nav-item">
        <Link to="/viewleavestatus" className="nav-link  text-light fs-4">View Status</Link>

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
      <p className="text-light fs-4  P-3" style={{"paddingRight":"20px"}}><strong>Welcome, {user.firstname}</strong></p>

      <button classname="btn btn-danger text-light fs-4" onClick={logout}> logout</button>
      
    </div>
  </div>
</nav>
    </div>
  )
}
