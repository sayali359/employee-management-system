// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function ViewLeaveStatus() {
//   const [leavedetails, setleavedetails] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("userinfo"));
//     const eid = user?.eid;

//     axios
//       .get(`http://localhost:8087/findbyeid?eid=${eid}`)
//       .then((response) => {
//         setleavedetails(response.data);
//       })
//       .catch(() => {
//         alert("Error in data retrieve operation");
//       });
//   }, []);

//   // DELETE
//   const deleteLeave = (id) => {
//     if (window.confirm("Are you sure you want to delete this leave?")) {
//       axios
//         .delete(`http://localhost:8087/deletebyid?id=/${id}`)
//         .then(() => {
//           alert("Leave deleted successfully");

//           // update UI immediately
//           setleavedetails((prevLeaves) =>
//             prevLeaves.filter((leave) => leave.id !== id)
//           );
//         })
//         .catch((error) => {
//           console.error("Delete error:", error);
//           alert("Delete failed");
//         });
//     }
//   };

//   // UPDATE
//   const updateLeave = (id) => {
//     navigate(`/updateleave/${id}`);
//   };

//   return (
//     <div>
//       <h1>View Leave Status</h1>

//       <table className="table table-bordered border-success">
//         <thead>
//           <tr>
//             <th>Leave ID</th>
//             <th>EID</th>
//             <th>Firstname</th>
//             <th>Lastname</th>
//             <th>Reason</th>
//             <th>From Date</th>
//             <th>To Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {leavedetails.map((leave) => (
//             <tr key={leave.id}>
//               <td>{leave.id}</td>
//               <td>{leave.eid}</td>
//               <td>{leave.firstname}</td>
//               <td>{leave.lastname}</td>
//               <td>{leave.reason}</td>
//               <td>{leave.fromdate}</td>
//               <td>{leave.todate}</td>
//               <td>
//                 <button
//                   className="btn btn-warning btn-sm me-2"
//                   onClick={() => updateLeave(leave.id)}
//                 >
//                   Update
//                 </button>

//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => deleteLeave(leave.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// import React, { use, useEffect } from 'react'
// import { useState } from 'react'

// import axios from 'axios';
// export default function ViewLEaveStatus() {
// let [leavedetails,setleavedetails]=useState([]);
// // let eid;
// const [editLeave, setEditLeave] = useState();
// let[showmodal,setShowmodal] = useState(false);
// let[fromdate,setFromdate] = useState("");
// let[todate,setTodate]= useState("");
// let[reason, setReason]= useState("");

// let [id,setId]=useState(0);


// useEffect(()=>
// {
//     let user=JSON.parse(localStorage.getItem("userinfo"));
//     eid=user.eid;
// axios.get(`http://localhost:8087/findbyeid?eid=${eid}`)
// .then((response)=>{
//    let data=response.data;
//    setleavedetails(data);
// })
// .catch((error)=>
// {
// alert("error in data retrive operation....")
// }) 
// },[eid])

// let handleDelete = () => {
//     if (window.confirm("Are you sure you want to delete?")) {
//       axios.delete(`http://localhost:8087/deletebyid?id=${id}`)
//         .then(() => {
//           setleavedetails(leavedetails.filter(l => l.id !== id));
//         })
//         .catch(()=>
//           {
//             alert("Error deleting record")
//     },[eid])
//     }
//   }
  




// let updateleave=(leave)=>
// {
//     setEid(leave.id)
//     setReason(leave.reason)
//      setFromdate(leave.fromdate)
//       setTodate(leave.todate)

//       setShowmodal(true);

// }
// let Updateleave=()=>
// {

//   let updateleavedetails={reason,fromdate,todate};
//   axios.put(`http://localhost:8087/updateleave?leaveid= ${eid}`,updateleavedetails)
//   .then((response)=>
//   {
//     alert(response.data);
//     setShowmodal(false);
//   })
//   .catch((error)=>
//   {
//     alert(error)
//   })



// }


//   return (
//     <div>
// <table className="table table-bordered border-success">
// <h4 className="mb-3">Update Leave</h4>
// <tr>
//         <th>Leaveid</th>
//         <th>Eid</th>
//         <th>firstname</th>
//         <th>lastname</th>
//         <th>reason</th>
//         <th>fromdate</th>
//         <th>todate</th>
//         <th>status</th>
//     </tr>
//     {
//         leavedetails.map((leave)=>
//             <tr>
//                 <td>{leave.id}</td>
//                 <td>{leave.eid}</td>
//                 <td>{leave.firstname}</td>
//                 <td>{leave.lastname}</td>
//                 <td>{leave.reason}</td>
//                 <td>{leave.fromdate}</td>
//                 <td>{leave.todate}</td>
//                 <td>{leave.status}</td>
//                 {/* //<td><button>delete</button> */}
//                <td><button onClick={()=>{updateleave(leave)}}>updateleave</button></td>
//                 <button type="reset" className="btn btn-secondary ms-2"onClick={() => handleDelete(leave.id)} style={{ marginLeft: "10px" }}>Delete</button>
//                </tr>
           


//         )
// }


    

// </table>
// {
//   showmodal?<div className="modal fade show d-block" tabIndex="-1">
//     <div className="modal-dialog">
//       <div className="modal-content">

//         {/* HEADER */}
//         <div className="modal-header">
//           <h5 className="modal-title">Update</h5>
//           <button
//             type="button"
//             className="btn-close" onClick={()=>{setShowmodal(false)}}></button>
//         </div>

//         {/* BODY */}
//         <form >
//           <div className="Update Leave">

//             <div className="mb-3">
//               <label className="form-label">Reason</label>
//               <input
//                 type="text" value={reason}
//                 className="form-control" onChange={(e)=>{setReason(e.target.value)}}/></div>
          

//             <div className="mb-3">
//               <label className="form-label">From Date</label>
//               <input
//                 type="date" value={fromdate}
//                 className="form-control" onChange={(e)=>{setFromdate(e.target.value)}}/>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">To Date</label>
//               <input
//                 type="date" value={todate}
//                 className="form-control" onChange={(e)=>{setTodate(e.target.value)}}/>
              
                
            
//             </div>

//           </div>

//           {/* FOOTER */}
//           <div className="modal-footer">
//             <button type="submit" className="btn btn-success">
//               Update
//             </button>
//             <button
//               type="button"
//               className="btn btn-secondary"
             
//             >
//               Cancel
//             </button>
//           </div>
//         </form>

//       </div>
//     </div>
//   </div>:null
// }


//     </div>
//   )
// }



import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewLeaveStatus() {
   let app=process.env.REACT_APP_API_URL;

  const [leavedetails, setleavedetails] = useState([]);
  const [eid, setEid] = useState(null);

  const [showmodal, setShowmodal] = useState(false);
  const [fromdate, setfromdate] = useState("");
  const [todate, settodate] = useState("");
  const [reason, setreason] = useState("");
  const [id, setid] = useState(0);


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userinfo"));
    if (user) {
      setEid(user.eid);
    }
  }, []);

 
  useEffect(() => {
    if (eid) {
      show();
    }
  }, [eid]);

  const show = () => {
    axios.get(`${app}/findbyeid?eid=${eid}`)
      .then((response) => {
        setleavedetails(response.data);
      })
      .catch(() => {
        alert("Error fetching leave details");
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios.delete(`${app}/deletebyid?id=${id}`)
        .then(() => {
          alert("Leave deleted");
          show();
        })
        .catch(() => alert("Delete failed"));
    }
  };

  const update = (leave) => {
    setid(leave.id);
    setreason(leave.reason);
    setfromdate(leave.fromdate);
    settodate(leave.todate);
    setShowmodal(true);
  };

  const updateleave = (e) => {
    e.preventDefault();

    const updateleavedetails = { reason, fromdate, todate };

    axios.put(`${app}/updateleave?id=${id}`, updateleavedetails)
      .then((response) => {
        // alert(response.data);
        alert("updated sucessfully")
        setShowmodal(false);
        show();
      })
      .catch(() => {
        alert("Update failed");
      });
  };

  return (
    <div>

      <h1 className="bg-secondary text-dark p-3 rounded shadow col-12 text-center">
        View Leave Status
      </h1>

      <table className="table table-bordered border-secondary">
        <thead>
          <tr>
            <th>Leave ID</th>
            <th>EID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Reason</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leavedetails.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.id}</td>
              <td>{leave.eid}</td>
              <td>{leave.firstname}</td>
              <td>{leave.lastname}</td>
              <td>{leave.reason}</td>
              <td>{leave.fromdate}</td>
              <td>{leave.todate}</td>
              <td>{leave.status}</td>
              <td>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => update(leave)}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(leave.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
      {showmodal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Update Leave Form</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowmodal(false)}
                ></button>
              </div>

              <form onSubmit={updateleave}>
                <div className="modal-body">

                  <div className="mb-3">
                    <label className="form-label">Reason</label>
                    <input
                      type="text"
                      className="form-control"
                      value={reason}
                      onChange={(e) => setreason(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">From Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={fromdate}
                      onChange={(e) => setfromdate(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">To Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={todate}
                      onChange={(e) => settodate(e.target.value)}
                    />
                  </div>

                </div>

                <div className="modal-footer">
                  <button type="submit" className="btn btn-success">
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowmodal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}





