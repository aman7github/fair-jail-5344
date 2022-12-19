import {Routes,Route} from "react-router-dom"




import React from 'react'
import Home from "../Home"
import Login from "../components/Login"
import Signup from "../components/Signup"


const AllRoutes = () => {

 




  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default AllRoutes