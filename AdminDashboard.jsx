import React from 'react'

import Adminnavbar from './Adminnavbar'
export default function AdminDashboard() {
  return (
    <div>
        <h1 className="w-100 bg-success text-light fs-1 text-center" style={{"height":"50px"}}>Welcome to AdminDashboard</h1>
        <Adminnavbar></Adminnavbar>
    </div>
  )
}
