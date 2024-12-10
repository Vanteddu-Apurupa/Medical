import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.jpg'; // Replace with your logo file
import DemoVideo from './doctor.mp4'; // Replace with your video file

const Home = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Full-Screen Background Video */}
      <video
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1, // Place the video behind all other elements
        }}
        src={DemoVideo}
        type="video/mp4"
        autoPlay
        muted
        loop
      />

      {/* Navbar */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(5px)',
          position: 'fixed',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          marginTop: '20px',
          borderRadius: '50px',

        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
          />
          <h1
            style={{
              marginLeft: '10px',
              fontSize: '1.2rem',
              color: 'darkblue',
              fontFamily: 'Roboto',
            }}
          >
            MediSync
          </h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link to="/" style={{ color: 'darkblue', textDecoration: 'none', fontSize: '1rem' }}>
            Home
          </Link>
          <Link
            to="/services"
            style={{ color: 'darkblue', textDecoration: 'none', fontSize: '1rem' }}
          >
            
          </Link>
          <Link
            to="/contact"
            style={{ color: 'darkblue', textDecoration: 'none', fontSize: '1rem' }}
          >
           
          </Link>
          <div
            style={{ position: 'relative', cursor: 'pointer' }}
            onMouseEnter={() => setDropdownVisible(true)}
           
          >
            <span
              style={{
                fontSize: '1rem',
                color: 'darkblue',
                fontWeight: 'bold',
              }}
            >
              Login
            </span>
            {isDropdownVisible && (
              <div
                style={{
                  position: 'absolute',
                  top: '30px',
                  right: 0,
                  backgroundColor: 'white',
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                  borderRadius: '5px',
                  minWidth: '120px',
                  zIndex: 1,
                }}
              >
                <Link
                  to="/log"
                  style={{
                    display: 'block',
                    padding: '10px',
                    textDecoration: 'none',
                    color: 'darkblue',
                    fontSize: '0.9rem',
                  }}
                >
                  Admin Login
                </Link>
                <Link
                  to="/dlog"
                  style={{
                    display: 'block',
                    padding: '10px',
                    textDecoration: 'none',
                    color: 'darkblue',
                    fontSize: '0.9rem',
                  }}
                >
                  Doctor Login
                </Link>
                <Link
                  to="/log"
                  style={{
                    display: 'block',
                    padding: '10px',
                    textDecoration: 'none',
                    color: 'darkblue',
                    fontSize: '0.9rem',
                  }}
                >
                  Patient Login
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/reg"
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '5px 10px',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
            }}
          >
            SignUp
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          zIndex: 1, // Ensure text overlays the video
        }}
      >
        <h2>Your Health, Our Priority</h2>
        <p style={{ marginTop: '10px', fontSize: '1.2rem' }}>Seamless healthcare solutions at your fingertips.</p>
        <Link
          to="/join"
          style={{
            backgroundColor: 'darkblue',
            color: 'white',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1.1rem',
            display: 'inline-block',
            marginTop: '20px',
          }}
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Home;