import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import  { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Switch from "react-switch";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Boarding from "./components/Boarding";
import UploadForm from './components/UploadForm';
import City from './components/City'
import Reset from "./components/Reset";
import Home from "./components/Home"
import Profile from './components/Profile'

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <Router>
      <div className="App">
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Pet Service
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
        </nav> */}
       
        
        <Routes>

       

          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> :<Home/> }
          />
           <Route path="/home"  element={<Home/>}/>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/Pet-Boarding" element={<UserDetails />} />
          <Route path="/bording-job" element={<Boarding/>}/>
          <Route path="/false" element={<UploadForm/>}/>
          <Route path="/city" element={<City/>}/>
          <Route path="/forgot"  element={<Reset/>}/>
         <Route path="/profile" element={<Profile/>}/>
                
        </Routes>
        {/* <ImageUpload/> */}
      </div>
   z

      {/* <Switch>
        <Route  path="/forgot-password" component={ForgotPasswordForm} />
        <Route
          exact
          path="/reset-password/:token"
          component={ResetPasswordForm}
        />
      </Switch> */}
    </Router>

    
  );
}

export default App;
