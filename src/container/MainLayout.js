import React from 'react'
import { Link, Outlet } from "react-router-dom";

 function MainLayout(props) {
  return (
    <div>
    <h1>Main layout</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/">Home</Link>|{" "}
     
    </nav>
    <Outlet/>
  </div>
  
  )
}
export default MainLayout;