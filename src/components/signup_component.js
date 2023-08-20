import React, { Component, useState,useEffect } from "react";
import {Link} from 'react-router-dom'  


export default function SignUp() {
  const [uname, setuname] = useState("");
  const [mobail, setMobail] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [formErrors,setformErrors]=useState({})
  const [isSubmit,setisSubmit]=useState(false)
  const [isOwner,setisOwner]=useState()
  const [service,setService]=useState()
  const [Serviceprovider,setServiceprovider]=useState()
  const [State, setState] = useState("");
  const [District, setDistrict] = useState("");

  const validate=(values)=>{
    const errors={}
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if(!values.uname){
      errors.uname="Username is required"
    }
    else{

    }
    if(!values.email){
      errors.email="Email is required"
    }
    else if(!regex.test(values.email)){
      errors.email="this is not a valid email"
    
    }
    if(!values.password){
      errors.password="passworrd is required"
    }
    else if(values.password.length <6){
      errors.password="Password must be more than 6 character"
    
    }
    return errors
      }
    
  
  const handleSubmit = (e) => {
    setformErrors(validate(email,password,uname))

    if (userType == "Admin" && secretKey != "Amal") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(uname, mobail, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          uname,
          email,
          mobail,
          password,
          userType,
          service,
          isOwner,
          Serviceprovider
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");

            window.location.href = "./sign-in";
          } else {
            alert("User already exist");
          }
        });
    }
  };

  useEffect(()=>{
    console.log(formErrors);
 if(Object.keys(formErrors).length==0 &&isSubmit){
  console.log(email,password);
 }
  },[formErrors])
  return (

<div>
<nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
            LEASHBENCH
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div>
            Register As
            { <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            /> }
            PetOwner 

            { <input
              type="radio"
              name="UserType"
              value="serviceprovider"
              onChange={(e) => setUserType(e.target.value)}
            /> }
            PetSitter

            {/* <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin */}
          </div>
          {/* {userType == "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null} */}

          <div className="mb-3">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              onChange={(e) => setuname(e.target.value)}
            />
          </div>

          {/* <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div> */}

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <p className="errormsg">{formErrors.email}</p> */}

         
          
{userType == "serviceprovider" ?(
          <div>
          <label>Type of service</label>  
         
          </div>
):null}
          {userType == 'serviceprovider' ?(
<div>
            <select vlaue=""  onChange={(e)=>setService(e.target.value)}>

              <option onChange={(e)=>setService(e.target.value)}>Grooming </option>
              <option onChange={(e)=>setService(e.target.value)}>Training </option>
              <option onChange={(e)=>setService(e.target.value)}>Boarding</option>
              <option onChange={(e)=>setService(e.target.value)}>Sitter</option>

            </select>
          </div>
          
          ):null}
          


          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              onChange={(e) => setMobail(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label>State</label>
            <input
            type="text"
            className='form-control'
            placeholder='state'
            onChange={(e)=>setState(e.target.value)}

            />
            </div>
           <div className='mb-3'>
            <label>District</label>
            <input
            type="text"
            className='form-control'
            placeholder='state'
            onChange={(e)=>setDistrict(e.target.value)}

            />
            
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}
