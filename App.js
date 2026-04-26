import logo from './logo.svg';
import './App.css';
import AddEmployee from './AddEmployee';
import GetEmployee from './GetEmployee';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Updateemp from './Updateemp';
import Adminnavbar from './Adminnavbar';
import AdminDashboard from './AdminDashboard';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Service from './Service';
import Home from './Home';
import EmployeeDashboard from './EmployeeDashboard';
import UserRegistration from './UserRegistration';
import LeaveApplication from './LeaveApplication';
import ViewLeaveStatus from './ViewLeaveStatus';
import ApproveLeave from './ApproveLeave';




function App() {
  return (
     <div>
    
    
  
    <Routes>
      <Route path="/addemp" element={<AddEmployee></AddEmployee>}></Route>
      <Route path="/getemp" element={<GetEmployee></GetEmployee>}></Route>
      <Route path="/updateemp/:empid" element={<Updateemp></Updateemp>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
      <Route path="/contactus" element={<Contactus></Contactus>}></Route>
      <Route path="/service" element={<Service></Service>}></Route>
      <Route path="/admindashboard" element={<AdminDashboard></AdminDashboard>}></Route>
      <Route path="/employeedashboard" element={<EmployeeDashboard></EmployeeDashboard>}></Route>
      <Route path="/" element={<UserRegistration></UserRegistration>}></Route>
      <Route path="/leaveapplication" element={<LeaveApplication></LeaveApplication>}></Route>
      <Route path="/viewleavestatus" element={<ViewLeaveStatus></ViewLeaveStatus>}></Route>
      <Route path="/approveleave" element={<ApproveLeave></ApproveLeave>}></Route>


    </Routes>
 
   
 
   



   
     </div>
  );
}

export default App;
