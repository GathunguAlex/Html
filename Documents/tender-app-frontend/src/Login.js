
import React, {useState} from "react";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import {useNavigate} from "react-router-dom";
function Login({setUser}){
  const navigate=useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          // setUser(user) 
          console.log("hi")
          navigate('/cards')
          localStorage.setItem("me", JSON.stringify(user))
    });
      }
    });
  }
  
    return (
    
      <div className="login-form">
        <form className="login-form" onSubmit={handleSubmit}>
      {/* <!-- Email input --> */}
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example1">Username</label>
        <input type="text" id="username" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      </div>
{/*
      <!-- Password input --> */}
      <div className="form-outline mb-4">
      <label className="form-label" htmlFor="form2Example2">Password</label>
        <input type="password" id="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      {/* <!-- 2 column grid layout for inline styling --> */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/* <!-- Checkbox --> */}
          {/* <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
          </div> */}
        </div>
        <div className="col">
          {/* <!-- Simple link --> */}
          <NavLink to= "/sign-up">
          Sign Up
          </NavLink>
        </div>
      </div>
      {/* <!-- Submit button --> */}
        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
    </form>
      </div>
    )
}
export default Login


// import {Button , Form} from 'react-bootstrap'
// import{ useRef, useState , useEffect}from 'react'

// const Login=()=>{
//     const userRef =useRef();
    
//     const [user, setUser]= useState('');
//     const[password, setPassword]= useState('');
//     const [login,setLogin]= useState('');
//     const [errors,setErrors]= useState(false);
    
//     const [formValue, setFormValue] = useState({
//         username: '',
//         password: ''
//       });
    
//      function onSubmit(e) {
//         e.preventDefault()
//     const user ={
//         user,
//         password
//     }

//         fetch(`http://localhost:3000/login`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(user),
//         }).then(res => {
//           if (res.ok) {
//             res.json().then(setUser)
//           }else{
//             res.json().then(e => setErrors(Object.entries(e.error).flat()))
//           }
//         })
//     }
   
// return (
// <section >


// {/* <Form fluid onChange={setFormValue} formValue={formValue} onClick={onSubmit}>

// <Form.Group controlId ="formEmail">
//   <Form.Control type="email" placeholder= "example 123456"autoComplete="off"/>
// </Form.Group>
// <Form.Group controlId ="formPassword">
//   <Form.Control type="Password" placeholder= "Password"/>
// <Button variant="info" size="lg" type = "submit" >
//           Login{" "}
//         </Button>
//         {""}
//         </Form.Group>
// </Form> */}

// </section >
// )
// };

// export default Login