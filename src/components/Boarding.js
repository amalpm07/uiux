import React,{Component,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import  './Boarding.css'
import axios from 'axios'

function Boarding() {
  const [PethostelName, setPethostelName] = useState("");  
  const [Address, setAddress] = useState("");
  const [About, setAbout] = useState("");
  const [Pettypes, setPettypes] = useState("");
  const [Size, setSize] = useState("");
  const [PlaceToSleep, setPlaceToSleep] = useState("");
  const [Pincode,setPincode]=useState()
  const [Food,setFood]=useState()
  const [Training,setTraining]=useState()
  const [Grooming,setGrooming]=useState()
  const [Video,setVideo]=useState()
  const [Image,setImage]=useState()
 

 

  const handlFileChange =(event)=>{
    setImage(event.target.files[0])
  }

  const handleUpload =async () =>{
    const formData=new FormData()
    formData.append('Userinfo',Image)

    try{
      await axios.post('http://localhost:5000/api/upload', formData);
      console.log('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
    }
  



  const handleSubmit =(e)=>{
    e.preventDefault();


    //   console.log(uname, mobail, email, password);
      fetch("http://localhost:5000/boarding", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          PethostelName,
          Address,
          About,
          Pettypes,
          Size,
          PlaceToSleep,
          Pincode,
          Food,
          Training,
          Grooming,
         Image,
          Video
          

        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
         if(data.Status
          == 'ok'){
          alert("Registration Succesful")
         }
         else{
          alert("FError")
         }
        });
    }
  
    // function convertToBase64(e){
    //   console.log(e);
    //   var reader = new FileReader()
    //   reader.readAsDataURL(e.target.file[0])
    //   reader.onload =()=>{
    //       console.log(reader.result);  //base64encoded string
    //       setImage(reader.result)
      
    //   }
    //   reader.onerror =error=>{
    //       console.log("Error",error);
    //   };
    // }
  
   
      
    
      // const handleFileChange = (e) => {
      //   setSelectedFile(e.target.files[0]);
      // };
    
      // const handlSubmit = (e) => {
      //   e.preventDefault();
    
      //   const formData = new FormData();
      //   formData.append('image', selectedFile);
    
      //   fetch('http://localhost:5000/upload', {
      //     method: 'POST',
      //     body: formData,
      //   })
      //     .then((response) => response.text())
      //     .then((data) => {
      //       console.log(data); // Log the response from the backend
      //     })
      //     .catch((error) => {
      //       console.error('Error:', error);
      //     });
      
  
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
       <div className="auth-inner ">
       <h5 className='head'>Profile Information </h5>
        <form onSubmit={handleSubmit}>
       <div className="mb-3">
            <label>Pet hostel name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Pet hostel name"
              onChange={(e)=>setPethostelName(e.target.value)}
              
            />
            
        
            
          </div>
          <div className="mb-3">
            <label>Address</label>
            <input
              type="Address"
              className="form-control"
              placeholder="Address"
              onChange={(e)=>setAddress(e.target.value)}

            />
          </div>

          <div className="mb-3">
            <label>About</label>
            <input
              type="text"
              className="form-control"
              placeholder="landmark"
              onChange={(e)=>setAbout(e.target.value)}

              
            />
          </div>
          <div className='mb-3 Pet-types'>
            <label>Pet Types</label>
            <select className='types' vlaue=""  onChange={(e)=>setPettypes(e.target.value)}>
            <option  placeholder=''>Select Types</option>

<option onChange={(e)=>setPettypes(e.target.value)}>Dog </option>
<option onChange={(e)=>setPettypes(e.target.value)}>Rabbit </option>
<option onChange={(e)=>setPettypes(e.target.value)}>Guinea Pigs</option>
<option onChange={(e)=>setPettypes(e.target.value)}>Birds</option>

</select>
          </div>

          <div className='mb-3'>
            <label>Accepted Pet Size</label>
            <select className='size' vlaue=""  onChange={(e)=>setSize(e.target.value)}>
<option  placeholder=''>Select Size</option>
<option onChange={(e)=>setSize(e.target.value)}>20-40 KG </option>
<option onChange={(e)=>setSize(e.target.value)}>10-20 KG </option>
<option onChange={(e)=>setSize(e.target.value)}>5-10 KG</option>
<option onChange={(e)=>setSize(e.target.value)}>1-5 KG</option>

</select>
          </div>

          <div className='mb-3'>
            <label>The place Your pet will sleep at night</label>
            <input
            type="text"
            className='form-control'
            
            onChange={(e)=>setPlaceToSleep(e.target.value)}

            />
          </div>

          <div className='mb-3'>
            <label>Pincode</label>
            <input
            type="text"
            className='form-control'
            placeholder='pincode'
            />
          </div>

          <div>
          <h4>Facility</h4>
          <div className='mb-3'>
            <label>Food</label><br/>
              3Times
            <input
            type="radio"
            name='Food'
            value="3 Times"
            onChange={(e)=>setFood(e.target.value)}

            />
            2 Times
            <input
            type="radio"
         name='Food'
            value="2 Times"
            onChange={(e)=>setFood(e.target.value)}

            />
          </div>

          <div className='mb-3'>
            <label>Providing Training Or Not</label><br/>
              Yes
            <input
            type="radio"
            name='training'
            value="Yes"
            onChange={(e)=>setTraining(e.target.value)}

            />
            No
            <input
            type="radio"
         name='training'
            value="No"
            onChange={(e)=>setTraining(e.target.value)}

            />
          </div>

       

          <div className='mb-3'>
            <label>Providing Grooming Or Not</label>
            Yes
            <input
            type="radio"
            name='grooming'
            value="Yes"
            onChange={(e)=>setGrooming(e.target.value)}

            />
            No
            <input
            type="radio"
         name='grooming'
            value="No"
            onChange={(e)=>setGrooming(e.target.value)}

            />
          </div>

          {/* <div className="auth-wrapper">
        <div className="auth-inner">
      <input type="file" onChange={handlFileChange} />
      <button onClick={handleUpload}>Upload</button>
      </div>
    </div> */}
          

          {/* <div className='mb-3'>
            <label>1 Vedio</label>
            <button className='ms-4'>Upload</button>
          </div> */}

          {/* <div className='mb-3'>
            <label>FB Profile Page</label>
          </div> */}

          <button type='submit' className='btn btn-primary'>
            Register
          </button>
          </div>
          </form>

          </div>
    </div>
    </div>
  )
}


export default Boarding
