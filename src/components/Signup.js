import React, { useState } from 'react';
import axios from 'axios';
import './reg.css';

const Signup = () => {

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8080/register", {
        name: document.getElementById("idun").value,
        email: document.getElementById("idemail").value,
        password: document.getElementById("idpw").value,
        password2: document.getElementById("idconfirm").value,
      });

      console.log(response.data);
      if (response.data === "done") {
        alert("Successfully Registered! Please Login.");
      } else {
        alert("Failed to register");
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="main">
      <div className="login-page1">
        <h3>REGISTER</h3>

        {/* Username Input */}
        <input
          type="text"
          id="idun"
          placeholder="Enter Username"
        />

        {/* Email Input */}
        <input
          type="email"
          id="idemail"
          placeholder="Enter Email"
        />

        {/* Password Input */}
        <input
          type="password"
          id="idpw"
          placeholder="Enter Password"
        />

        {/* Confirm Password Input */}
        <input
          type="password"
          id="idconfirm"
          placeholder="Confirm Password"
        />

        {/* Register Button */}
        <button onClick={handleRegister}>
          Register
        </button>

        {/* Login Redirect */}
        <h4>
          Have an account? <a href='/log'>Login</a>
        </h4>
      </div>
    </div>
  );
};

export default Signup;
