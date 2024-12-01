import React,{useState}from 'react';
import './forms.css';
import user_icon from  '../Assets/person-svgrepo-com.svg' 
import email_icon from  '../Assets/email-1572-svgrepo-com.svg'
import password_icon from   '../Assets/password-svgrepo-com.svg'

function Forms() {
    const [action,setAction]=useState("Sign Up")
  return (
    <div className='form-container'>
        <div className="formheading">{action}</div>
        <div className="headingunderline"></div>
        <div className='form-header'>
         <div className="form-text"></div>
         <div className="form-underline"></div>
        </div>
        <div className="form-input">
            {action==="Login"?<div></div>: <div className="input">
            <img src={user_icon} alt=""/>
            <input type='text' placeholder='Username'/>
         </div>}
         <div className="input">
           <img src={email_icon} alt=""/>
           <input type='email' placeholder='Email'/>
         </div>
         <div className="input">
         <img src={password_icon} alt=""/>
           <input type='password' placeholder='Password'/>
         </div>
         {
            action==="Sign Up" ?<div></div>:<div className="forgot-password">
            forgot password? <span>click Here!</span>
         </div>
         }
         
         <div className="submit-container">
            <div className={action==="Login"?"submit gray": "submit"} onClick={()=>setAction("Sign Up")}>Sign up</div>
            <div className={action==="Sign Up"?"submit gray" : "submit"} onClick={()=>setAction("Login")}>Login</div>
         </div>
        </div>
    </div>
  )
}

export default Forms
 