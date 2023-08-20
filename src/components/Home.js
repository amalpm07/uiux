import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Img from '../Image/dogsample.jpg'
import bording from '../Image/pet-boarding.png'
import {Link} from 'react-router-dom'
import './Home.css'

function Home(){



    return(
        <>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> LEASHBENCH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Nav">
            <Nav.Link href='/sign-in'> Login</Nav.Link>
            <Nav.Link href="/sign-up">Sign up</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className='nav1'>
          <Nav.Link className='' href="">Service Near Me</Nav.Link>
          <Nav.Link className='' href="/bording-job">Pet Sitter Job</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   <div>
     <img src={Img} alt="" className='Img' />
     <div  className='container search-section d-none d-md-block'>
     <div className='row py-3 mb-4 bg-div'>
  <div className='col-md-4'>
 <label>
 I'm Looking For
 </label>
<select name="" id='' className='form-control'>
  <option>Select Service</option>
  <option > 
<Nav.Link className='' href="/Pet-Boarding">Pet Boarding</Nav.Link>
</option>
  <option>Pet Grooming</option>
  <option>Pet Sitter</option>
</select>
   </div>
   <div className='col-md-4'>
 <label>Near</label>
 <input type='text' className='form-control pac-target-input' placeholder='Select Your Location' autoComplete='off'></input>
   </div>
   <div className='col-md-4'>
    <button className='btn btn-primary col-md-12' type='button'><i className='fa fa-search' aria-hidden='true'>Search</i></button>
   </div>

 </div>

     </div>
     <div className='category-meta-nav'>
      <div className='row'>
        <div className='col col-4 col-md-2'>
          <a href='' target='' className='link-dark'>
            {/* <img src={bording} width={40}></img><br/> */}
            <Nav.Link className='' href="/Pet-Boarding">Pet Boarding</Nav.Link>
          </a>
        </div>
        <div className='col col-4 col-md-2'>
          <a href='' target='' className='link-dark'>
            {/* <img src={bording} width={40}></img><br/> */}
            <p >Pet Grooming</p>
          </a>
        </div>
        <div className='col col-4 col-md-2'>
          <a href='' target='' className='link-dark'>
            {/* <img src={bording} width={40}></img><br/> */}
            <p >Pet Sitter</p>
          </a>
        </div>

      </div>
     </div>
     
     </div>
  
   
       

</>
    );

    
}
export default Home

// <div className='container search-section d-none d-md-block'>
// <div className='row py-3 mb-4 bg-div'>
//   <div className='col-md-4'>
// <label>
// I'm Looking For
// </label>
// <select name="country" id='locate' className='form-control' style={"padding-left:40px"}>
// <option value={""}>Select Service</option>
// <option value={""}>Pet Boarding</option>
// <option value={""}>Pet Grooming</option>
// <option value={""}>Pet  Sitter</option>
// </select>
//   </div>
//   <div className='col-md-4'>
// <label>Near</label>
//   </div>

// </div>

// </div>