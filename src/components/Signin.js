import React from 'react';
import './reg.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const Handlesubmit = () => {
    axios.post("http://localhost:8080/check", {
      name: document.getElementById("idun").value,
      password: document.getElementById("idpw").value,
    }).then((res) => {
      console.log(res.data);
      if (res.data === "ADMIN") {
        localStorage.setItem("un", document.getElementById("idun").value);
        navigate('/admin');  // Redirect to admin dashboard
      } else if (res.data === "PHARMACIST") {
        localStorage.setItem("un", document.getElementById("idun").value);
        navigate('/pha');  // Redirect to pharmacist dashboard
      } else if (res.data === "SUCCESS") {
        localStorage.setItem("un", document.getElementById("idun").value);
        navigate('/home1');  // Redirect to user home page
      } else {
        alert("User not found. Please register.");
      }
    }).catch((error) => {
      console.error("Error during login:", error);
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <b><h3>LOGIN</h3></b>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <input
              style={{
                backgroundColor: 'transparent',
                height: '4vh',
                width: "12vw",
                borderRadius: '40px',
                padding: '10px',
                border: '1px solid lightgray',
              }}
              type="text"
              id="idun"
              placeholder="  Enter Username"
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <input
              style={{
                backgroundColor: 'transparent',
                height: '4vh',
                width: "12vw",
                borderRadius: '40px',
                padding: '10px',
                border: '1px solid lightgray',
              }}
              type="password"
              id="idpw"
              name="pw"
              placeholder="  Enter Password"
            />
          </div>
        </div>

        <button
          id='but'
          onClick={Handlesubmit}
          style={{
            borderRadius: "10px",
            color: "black",
            borderColor: "transparent",
            height: "4vh",
            width: "30vh",
            backgroundColor: "lightblue",
            marginTop: "20px",
          }}
        >
          Login
        </button>
        <br />
        <br />
        <p>Don't have an account? <a href='/reg'> Signup</a></p>
      </div>
    </div>
  );
};

export default Login;
