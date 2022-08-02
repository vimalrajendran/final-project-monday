import React from 'react';
import './login.css';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios  from 'axios';
import {useNavigate ,Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const url = "http://localhost:7000/api/auth/login";
//     const { data } = await axios.post(url, data);
//     localStorage.setItem("token", data);
//     console.log(data);
//     localStorage.setItem("firstname", firstname);
//     console.log(firstname);
//     localStorage.setItem("lastname", res.lastname);
//     window.location = "/home";
//   } catch (error) {
//     if (
//       error.response &&
//       error.response.status >= 400 &&
//       error.response.status <= 500
//     ) {
//       setError(error.response.data.message);
//     }
//   }
// };


export const Signin = () => {
  let navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  }

  );
  
  return (
    <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={ async ({email,password},{resetForm}) => {
      let {data} =  await axios.post('http://localhost:7000/api/auth/login',({email,password}),{withCredentials: true})
        console.log(data);
        localStorage.setItem("token", data.token);
        // console.log(data);
        localStorage.setItem("firstname", data.firstname);
        localStorage.setItem("lastname", data.lastname);
        localStorage.setItem("email", data.email);
        localStorage.setItem("userid",data.userid);
        // window.location = "/home";
        navigate('/home');
        resetForm();
        toast('Logged-in successfully', {
          position: "top-center",
          autoClose: 2000,
          type: "success",
          theme: "colored",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
      }}
    >
      {formik => (
        <>
        <div className="container-fluid">
        <div className="row">
          <div  className="col-md-8 mt-6" style={{marginTop:"90px"}}>
        <div className='box1'>
          <h1 className="my-4  font-weight-bold .display-4">LogIn</h1>
          <Form onSubmit={formik.handleSubmit}>
            <TextField 
            label="Email"
             name="email"
             placeholder="xyz@gmail.com"
              type="email" 
              value={formik.values.email}
              onChange={formik.handleChange}
              />
            <TextField 
            label="password"
             name="password" 
             placeholder="Password"
             type="password"
             value={formik.values.password}
             onChange={formik.handleChange}
              />
            <button className="btn btn-dark mt-3" type="submit" >Login</button>
          </Form>
        </div>
        </div>
      </div>
    </div>
    </>
      )}
    </Formik>
    <br></br>
    <br></br>
    <br></br>
    </div>
    
  )
}
