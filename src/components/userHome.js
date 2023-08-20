import React, { Component, useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './userhome.css'
import ReactPaginate from 'react-paginate';
import { useRef } from "react";




export default function UserHome() {
  const [limit,setLimit]=useState(5);

  const [pageCount,setPageCount]=useState(1);
  const currentPage=useRef();

  useEffect(() => {
    currentPage.current=1;
    // getAllUser();
    getPaginatedUsers();
  }, []);

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
  


  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  //pagination
  function handlePageClick(e) {
    console.log(e);
   currentPage.current=e.selected+1;
    getPaginatedUsers();
   

  }

  function changeLimit(){
    currentPage.current=1;
    getPaginatedUsers();
  }

  function getPaginatedUsers(){
    fetch(`http://localhost:5000/paginatedUsers?page=${currentPage.current}&limit=${limit}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setPageCount(data.pageCount);
        setData(data.result)
        
       
      });

  }
  const Filter =(event) =>{
// setRecords(data.filter(i=> i.PethostelName.toLowerCase().includes(event.target.value)))

setRecords(data.filter(f => f.District.toLowerCase().includes(event.target.value)))
  }
  return (

    <>
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
            LEASHBENCH
            </Link>
            <div>
              <input type="text" className="form-control" onChange={Filter} placeholder=" Search"/>
            </div>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
             <select className="service">
              
             <option >Grooming </option>
              <option >Training </option>
              <option >Boarding</option>
              <option >Sitter</option>

             </select>
            </div>
          </div>
        </nav>
      {
Records.map((i)=>{
  return(

   
       
 
        <div className="card">
        <img src="image-url" alt="Card" />
        <div className="card-content">
          {/* {i._id} */}
          <h3>{i.PethostelName}</h3>
          <p>{i.Address}</p>
          <p>{i.Landmark}</p>
         <p> {i.State}</p>
          <p>{i.District}</p>
          <button>View More</button>

        </div>
      </div>
      
    
)})
  
        }
       <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          forcePage={currentPage.current-1}
        />

       
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
          </>
      
    
  );
}



// import React, { Component, useEffect, useState } from "react";

// export default function UserHome({ userData }) {
//   const logOut = () => {
//     window.localStorage.clear();
//     window.location.href = "./sign-in";
//   };
//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <div>
          
//           Name<h1>{userData.uname}</h1>
//           Email <h1>{userData.email}</h1>
//           <br />
//           <button onClick={logOut} className="btn btn-primary">
//             Log Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }