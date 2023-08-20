import React, { Component, useState,useEffect } from "react";
import { Router ,Link} from 'react-router-dom'
 function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Usertype ,setUSertype] =useState("")
  const [formErrors,setformErrors]=useState({})
  const [isSubmit,setisSubmit]=useState(false)

  function handleSubmit(e) {
    
    e.preventDefault();
setisSubmit(true)
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password
        
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok" ) {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./Pet-Boarding";
        }
        else{
          alert("invalid")
        }
       
      });

    
  }
  useEffect(()=>{
    console.log(formErrors);
 if(Object.keys(formErrors).length==0 &&isSubmit){
  console.log(email,password);
 }
  },[formErrors])

  return (


    <div>
      {/* <Router> */}
       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/Home'}>
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
        {/* </Router> */}
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
         
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className="errormsg">{formErrors.email}</p>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="errormsg">{formErrors.password}</p>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}



export default Login