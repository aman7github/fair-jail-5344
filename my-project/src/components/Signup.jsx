

import React from "react"
import '../Allcss/Form.css'
 
 const Signup = () => {

 const obj ={
  Fname:"",
  Lname:"",
  Email:"",
  Password:"",
  RePassword:"",
 }

  const [info, setinfo] = React.useState(obj)
  const ref = React.useRef(null)

 const handlechange=(e)=>{
  setinfo({...info, [e.target.name]:e.target.value})

  
 }
 
  const {Fname, Lname, Email, Password, RePassword} = info

  

  const handlesubmit=(e)=>{
    e.preventDefault()



  if(Password==RePassword && Password.length>=8){
    localStorage.setItem("forminfo", JSON.stringify(info))
    ref.current.classList.remove("Show-P-error")
    
  }else{
    if(RePassword.length!=0){
    ref.current.classList.add("Show-P-error")
    }
  }

  
   
  }







   return (
     <>
     <div className="maindiv">
     <div className="div"  >
      <h2>Create an Account</h2>
     </div>
    
    <form className="form"  onSubmit={handlesubmit} >
     <label  className="label" >First Name</label> 
     <input  className='input' name="Fname" type='text' placeholder="Enter your First Name"  value={Fname} onChange={handlechange}      />   <br />
    
     <label className="label"  >Last Name</label> 
     <input className='input' name="Lname" type='text' placeholder="Enter your Last Name" value={Lname} onChange={handlechange} /> <br />
    
     <label className="label"  >Email</label> 
     <input  className='input' name="Email" type='email' placeholder="Enter your Email" value={Email} onChange={handlechange} /> <br />

     <label className="label"  >Password</label> 
     <input className='input' name="Password" type='text'  placeholder="Enter your Password"  value={Password} onChange={handlechange} /> <br />
    
     <label className="label"  >Confirm Password</label> 
     <input className='input' name="RePassword" type='text'  placeholder="Re-Enter your Password" value={RePassword} onChange={handlechange} /> 
     <p className="P-error" ref={ref} >Password dose not matched </p>
     <br />
      <input className="submit" type="submit" />

    </form>


    </div>



     </>
   )
 }
 
 export default Signup