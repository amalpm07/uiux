import React,{Component,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Profile.css'
import profile from '../Image/profile.png'
function Profile() {
    
  const [data,setData]=useState([])
  const [Records,setRecords] =useState([])
  
    fetch("http://localhost:5000/getAllSprovider", {
      method: "GET",
    })
    //  .then((res) => res.json())
    // .then(res=>{
    //   setData(res.data)
    //   setRecords(res.data)
    // }).catch(err=>console.log(err))
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
        setRecords(data.data)
      });
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/sign-in'}>
          LEASHBENCH
          </Link>
          {/* <div>
            <input type="text" className="form-control" placeholder=" Search"/>
          </div> */}
          </div>
          </nav>
<div>
    <img className='Profile'  xs={6} md={4} src={profile} alt="" />
</div>
    
    </>
  );
}

export default Profile;