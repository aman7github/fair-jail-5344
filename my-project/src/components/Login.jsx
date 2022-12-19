

import React from "react"

import {Link, useNavigate} from "react-router-dom"
import "../Allcss/Form.css"

 
 const Login = () => {

 const obj ={
  Email:"",
  Password:"",

 }

  const [info, setinfo] = React.useState(obj)
  const ref = React.useRef(null)

 const handlechange=(e)=>{
  setinfo({...info, [e.target.name]:e.target.value})

  
 }
 
  const { Email, Password} = info
  
  let data = JSON.parse(localStorage.getItem("forminfo"))
  console.log(data.Email)
   
  const navigate = useNavigate()

  const handlesubmit=(e)=>{
    e.preventDefault()
    if(Email==data.Email && Password==data.Password){
      alert("Login Successful")
      navigate("/")

    }else{
      alert("Entered wrong Credential")
    }
   
  }







   return (
     <>
     <div className="maindiv2"  >
     <div className="div"  >
      <h2  className="h2" >Enter for Login</h2>
     </div>
    
    <form className="form"  onSubmit={handlesubmit} >
     
     <label className="label"  >Email</label> 
     <input  className='input' name="Email" type='email' placeholder="Enter your Email" value={Email} onChange={handlechange} /> <br />

     <label className="label"  >Password</label> 
     <input className='input' name="Password" type='text'  placeholder="Enter your Password"  value={Password} onChange={handlechange} /> <br />
    
      <input className="submit" type="submit" />

    </form>
      <Link to="/signup" >
     <p className="Ptagforsignup" > For signup click here </p>
     </Link>
    </div>



     </>
   )
 }
 
 export default Login