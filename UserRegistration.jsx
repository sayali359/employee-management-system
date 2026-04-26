
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserRegistration() {

  const app = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [eid, setEid] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContactno] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [isRegister, setIsRegistered] = useState(false);

  /* ---------------- LOGIN ---------------- */
  const userlogin = (e) => {
    e.preventDefault();

    const logindata = { username, password };

    axios.post(`${app}/login`, logindata)
      .then((res) => {
        const user = res.data;
        localStorage.setItem("userinfo", JSON.stringify(user));

        if (user.role === "ADMIN") navigate("/admindashboard");
        else if (user.role === "EMPLOYEE") navigate("/employeedashboard");
      })
      .catch((error) => {
        alert(error.response?.data || "Login failed");
      });
  };

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    if (!firstname || !lastname || !email || !contactno || !gender || !role || !username || !password || !confirmpassword) {
      alert("Please fill all fields");
      return false;
    }
    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return false;
    }
    return true;
  };

  /* ---------------- REGISTER ---------------- */
  const registerUser = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const user = {
      eid,
      firstname,
      lastname,
      email,
      contactno,
      gender,
      role,
      username,
      password
    };

    axios.post(`${app}/registerUser`, user)
      .then(() => {
        alert("User Registered Successfully");
        resetForm();
        setIsRegistered(true);   // auto show login
      })
      .catch(() => {
        alert("Error registering user");
      });
  };

  const resetForm = () => {
    setEid("");
    setFirstname("");
    setLastname("");
    setEmail("");
    setContactno("");
    setGender("");
    setRole("");
    setUsername("");
    setPassword("");
    setConfirmpassword("");
  };

  return (
    <div className="container mt-4">

      {!isRegister ? (

        /* ---------------- REGISTER FORM ---------------- */
        <form onSubmit={registerUser}>
          <h2 className="bg-secondary text-white text-center p-3 rounded">
            User Registration
          </h2>

          <input className="form-control mb-2" placeholder="First Name"
            value={firstname} onChange={(e) => setFirstname(e.target.value)} />

          <input className="form-control mb-2" placeholder="Last Name"
            value={lastname} onChange={(e) => setLastname(e.target.value)} />

          <input className="form-control mb-2" placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)} />

          <input className="form-control mb-2" placeholder="Contact"
            value={contactno} onChange={(e) => setContactno(e.target.value)} />

          <input className="form-control mb-2" placeholder="EID"
            value={eid} onChange={(e) => setEid(e.target.value)} />

          <select className="form-control mb-2" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select className="form-control mb-2" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Role</option>
            <option value="ADMIN">Admin</option>
            <option value="EMPLOYEE">Employee</option>
          </select>

          <input className="form-control mb-2" placeholder="Username"
            value={username} onChange={(e) => setUsername(e.target.value)} />

          <input type="password" className="form-control mb-2" placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)} />

          <input type="password" className="form-control mb-3" placeholder="Confirm Password"
            value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />

          <button className="btn btn-primary">Register</button>
          <button type="button" className="btn btn-success ms-2"
            onClick={() => setIsRegistered(true)}>
            Already Registered? Login
          </button>
        </form>

      ) : (

        /* ---------------- LOGIN FORM ---------------- */
        <form onSubmit={userlogin}>
          <h3>Login</h3>

          <input className="form-control mb-2" placeholder="Username"
            value={username} onChange={(e) => setUsername(e.target.value)} />

          <input type="password" className="form-control mb-3" placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)} />

          <button className="btn btn-success">Login</button>
          <button type="button" className="btn btn-info ms-2"
            onClick={() => setIsRegistered(false)}>
            New User? Register
          </button>
        </form>
      )}
    </div>
  );
}
