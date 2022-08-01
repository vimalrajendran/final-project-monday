import React, {useEffect, useState }from "react";
import axios from "axios";
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Button } from "react-bootstrap";
import { Link} from 'react-router-dom';
import Button from '@mui/material/Button';

// import { useState,useEffect } from 'react';
// import axios from 'axios';


// const GetProfile = ()=>{

// const [profile,setProfile] = useState([]);
// useEffect(()=>{
//     let token = document.cookie.split('=')[1];
//   const {user} = axios.get('http://localhost:7000/api/auth/profile',{
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": token
//     }, withCredentials:true
//   });
//    console.log({user});
//    setProfile(user)
//     console.log(profile);
    
     
// },[])

//     return(
//         <>

//           {profile.firstName};
//         </>
//     )

// }

// export default GetProfile;


export default function Profile(){
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");
  const email = localStorage.getItem("email");
  const name = firstname +" "+ lastname;
  return(
  <div className=" d-flex justify-content-center align-items-center flex-column mt-5" >
    <AccountCircleIcon style={{ width: 250, height: 250 }}/>
    <h3>Welcome, {firstname}</h3>
    <h1> <EmailIcon style={{ width: 25, height: 25 }}/> {email}</h1>
    <br></br>
    <h5>{name}</h5>
    <Button component={Link} to='/home'>Go Back</Button>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>
    )
};

