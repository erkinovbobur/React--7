import React, { useState } from 'react';
import axios from "../../api/axios";
import { useNavigate } from 'react-router-dom';
import "../login/Login.css";
import Toastify from "toastify-js"
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleUserLogin = async (e) => {
    e.preventDefault();

    axios.post("/auth/login", {username, password})
    .then (response => {
      if(response.status === 200) {
        localStorage.setItem("token", response.data.access_token )
        navigate("/Home")
      }
    })
    Toastify({
      text: "Logged in successfully!!!",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", 
      position: "left", 
      stopOnFocus: true, 
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} 
    }).showToast();
     }

  return (
    <div className='Login__container'>
        <div className='login__form'>
      <div className='login__text'>
        <h1>Login</h1>
      </div>
      <form className='form' onSubmit={handleUserLogin}>
        <div className="field">
          <input required
            type="text"
            placeholder='Enter your username'
            onChange={(e) => setUsername(e.target.value)}
            
          />
        </div>
        
        <div className="field">
          <div className="fas fa-lock"></div>
          <input  type="password" placeholder='Enter your password'onChange={(e) => setPassword(e.target.value)} />
        </div>
       
        <button className='form__button' type='submit'>  Login </button>
        

         
    
        
      </form>
    </div>

    </div>
  
  );
};

export default Login;
