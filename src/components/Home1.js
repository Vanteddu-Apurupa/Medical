import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Logo from './logo.jpg'; // Make sure to import your logo

const Home1 = () => {
  // Fetch the username from localStorage
  const username = localStorage.getItem("un");

  return (
    <div className="body">
      {/* Navbar */}
      <div className="navbar" style={{ backgroundColor: 'skyblue', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
        
        {/* Logo and Name */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: '50px', height: '50px', cursor: 'pointer' }} src={Logo} alt='Logo' />
          <h1 style={{ marginLeft: '10px', fontSize: '2vw' }}>
            <span style={{ color: 'white' }}>MEDI</span>
            <span style={{ color: 'darkblue' }}>SYNC</span>
          </h1>
        </div>
        
        {/* Logout Link */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/log" className="nav-link">
            <h3>Logout</h3>
          </Link>
        </div>
      </div>

      {/* Welcome Patient Message */}
      <div style={{
        textAlign: 'right',
        marginRight: '20px',
        fontSize: '0.8vw', 
        color: 'darkblue',
        fontWeight: '600',
        padding: '10px 20px',
        borderRadius: '10px'
      }}>
        <h2>Welcome, {username}!</h2>
      </div>

      {/* Cards for "View All Doctors" and "Appointment Details" */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        {/* View All Doctors Card */}
        <div style={{ 
          width: '20vw', 
          height: '20vh', 
          marginRight: '20px', 
          backgroundColor: 'lightblue', 
          borderRadius: '10px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
          cursor: 'pointer',
          transition: 'transform 0.3s, backgroundColor 0.3s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = 'darkblue';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'lightblue';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        >
          <Link to="/pdoc" style={{ textDecoration: 'none', color: 'white', fontSize: '1.5vw', transition: 'color 0.3s' }}>
            View All Doctors
          </Link>
        </div>

        {/* Appointment Details Card */}
        <div style={{ 
          width: '20vw', 
          height: '20vh', 
          backgroundColor: 'lightblue', 
          borderRadius: '10px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
          cursor: 'pointer',
          transition: 'transform 0.3s, backgroundColor 0.3s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = 'darkblue';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'lightblue';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        >
          <Link to="/appointments" style={{ textDecoration: 'none', color: 'white', fontSize: '1.5vw', transition: 'color 0.3s' }}>
            Appointment Details
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: 'skyblue', color: 'white', padding: '20px', marginTop: '40vh', textAlign: 'center' }}>
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

export default Home1;
