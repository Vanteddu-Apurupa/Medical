import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Logo from './logo.jpg'; // Make sure to import your logo
import DoctorImage from './dr.jpg'; // Make sure to import your doctor image
import DoctorImage1 from './dr1.jpg'; // Make sure to import your doctor image


const Home = () => {
  return (
    <div className="body">
      {/* Navbar */}
      <div className="navbar" style={{ backgroundColor: 'skyblue', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px',}}>
        
        {/* Logo and Name */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: '50px', height: '50px', cursor: 'pointer' }} src={Logo} alt='Logo' />
          <h1 style={{ marginLeft: '10px', fontSize: '2vw' }}>
            <span style={{ color: 'white' }}>MEDI</span>
            <span style={{ color: 'darkblue' }}>SYNC</span>
          </h1>
        </div>
        
        {/* Menu Links */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/reg" className="nav-link">
            <h3> Sign up</h3>
          </Link>
          <Link to="/log" className="nav-link">
            <h3>Login</h3>
          </Link>
          <Link to="/dlog" className="nav-link">
            <h3> Doctor Login</h3>
          </Link>
         
        </div>
      </div>

      {/* Main Content */}
      <div className="content" style={{ display: 'flex', padding: '20px', justifyContent: 'space-between' }}>
        {/* Left Box - Doctor Image */}
        <div className="left-box" style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={DoctorImage} alt="Doctor" style={{ width: '90%', height: 'auto', borderRadius: '10px' }} />
        </div>

        {/* Right Box - Medical Consultancy Services */}
        <div className="right-box" style={{ flex: '1', padding: '20px', color: 'darkblue', textAlign: 'center' }}>
          <h2>Medical Consultancy Services</h2>
          <p style={{ fontSize: '1.5vw', marginTop: '20px' }}>
            Connecting You to Exceptional</p>
           
           <p style={{paddingLeft:"10vw"}}> Healthcare Anytime, Anywhere.
          </p>
          {/* Get Care Button */}
          <button style={{
            backgroundColor: 'darkblue',
            width:'10vw',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1.2vw',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px'
          }}>
            Get Care In
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: 'skyblue', color: 'white', padding: '20px', marginTop: '20vh', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2vw' }}>© 2024 MediSync. All rights reserved.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
          <Link to="/terms" style={{ color: 'white', textDecoration: 'none' }}>Terms & Conditions</Link>
          <Link to="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
