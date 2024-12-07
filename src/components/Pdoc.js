import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from './logo.jpg';

const Pdoc = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const username = localStorage.getItem("un");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:8080/doctors");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);
  const submitAppointment = async () => {
    try {  console.log("Appointment Data:", {
      username: username,
      doctorEmail: selectedDoctor,
      date: appointmentDate,
      time: appointmentTime,
    });
     
      const response = await axios.post("http://localhost:8080/appointments", {
        date: appointmentDate,
        doctorEmail: selectedDoctor,
        patientEmail: username,
        time: appointmentTime,
      });
      alert(response.data);
  
      // Print the appointment data to the console
    
  
      // Clear fields after successful submission
      setAppointmentDate("");
      setAppointmentTime("");
      setSelectedDoctor(null);
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };
  

  return (
    <div className="body">
      {/* Navbar */}
      <div
        className="navbar"
        style={{
          backgroundColor: 'skyblue',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
        }}
      >
        {/* Logo and Name */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{ width: '50px', height: '50px', cursor: 'pointer' }}
            src={Logo}
            alt='Logo'
          />
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

      {/* Welcome Message */}
      <div
        style={{
          textAlign: 'right',
          marginRight: '20px',
          fontSize: '0.8vw',
          color: 'darkblue',
          fontWeight: '600',
          padding: '10px 20px',
          borderRadius: '10px',
        }}
      >
        <h2>Welcome, {username}!</h2>
      </div>

      {/* Doctor Cards */}
      <div
        className="doctor-cards-container"
        style={{
          margin: '40px auto',
          padding: '20px',
          maxWidth: '80%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'darkblue' }}>
          Doctor Information
        </h2>
        {doctors.map((doctor, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              margin: '10px',
              width: 'calc(30% - 20px)', // Adjust width for three columns with margin
              backgroundColor: '#f9f9f9',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ color: 'darkblue' }}>{doctor.name}</h3>
            <p><strong>Age:</strong> {doctor.age}</p>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Email:</strong> {doctor.email}</p>
            <p><strong>Phone Number:</strong> {doctor.phoneNumber}</p>
            <button
              onClick={() => setSelectedDoctor(doctor.email)}
              style={{
                backgroundColor: 'skyblue',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      {/* Appointment Form */}
      {selectedDoctor && (
        <div
          style={{
            margin: '20px auto',
            padding: '20px',
            maxWidth: '50%',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ color: 'darkblue', textAlign: 'center' }}>
            Book Appointment with {selectedDoctor}
          </h3>
          <label style={{ display: 'block', margin: '10px 0' }}>
            Date:
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              style={{ marginLeft: '10px', padding: '5px', width: '100%' }}
            />
          </label>
          <label style={{ display: 'block', margin: '10px 0' }}>
            Time:
            <input
              type="time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              style={{ marginLeft: '10px', padding: '5px', width: '100%' }}
            />
          </label>
          <button
            onClick={submitAppointment}
            style={{
              backgroundColor: 'skyblue',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              borderRadius: '5px',
              display: 'block',
              width: '100%',
              marginTop: '10px',
            }}
          >
            Submit
          </button>
        </div>
      )}

      {/* Footer */}
      <footer
        style={{
          backgroundColor: 'skyblue',
          color: 'white',
          padding: '20px',
          marginTop: '40vh',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.2vw' }}>© 2024 MediSync. All rights reserved.</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '10px',
          }}
        >
          <Link to="/terms" style={{ color: 'white', textDecoration: 'none' }}>
            Terms & Conditions
          </Link>
          <Link to="/privacy" style={{ color: 'white', textDecoration: 'none' }}>
            Privacy Policy
          </Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
            Contact Us
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Pdoc;
