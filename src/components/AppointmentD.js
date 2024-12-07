import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from './logo.jpg'; // Assuming the logo path is the same

const AppointmentD = () => {
  const [appointments, setAppointments] = useState([]);
  const username = localStorage.getItem("un");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/appointments?email=${username}`);
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const deleteAppointment = (id) => {
    axios.delete("http://localhost:8080/deleteAppointment", {
      params: {
        id: id,
      },
    })
    .then((response) => {
      alert(response.data);
      setAppointments(appointments.filter((appointment) => appointment.id !== id)); // Remove deleted appointment from list
    })
    .catch((error) => {
      console.error("Error deleting appointment:", error);
    });
  };

  const viewPrescription = async (appointmentId, patientEmail, doctorEmail) => {
    try {
      // Make the GET request to fetch prescription details
      const response = await fetch(`/viewPrescription?patientEmail=${patientEmail}&doctorEmail=${doctorEmail}`);
  
      // Check if the response is OK (status code 200)
      if (!response.ok) {
        throw new Error(`Failed to fetch prescription: ${response.statusText}`);
      }
  
      // Parse the JSON response from the server
      const prescription = await response.json();
      
      // You can now display the prescription data in a modal or navigate to a new page
      console.log(prescription);  // Replace with logic to display data
      alert(`Prescription details: ${JSON.stringify(prescription)}`);
      
    } catch (error) {
      console.error("Error fetching prescription:", error);
      alert(`Error: ${error.message}`);
    }
  };
  
  
  return (
    <div className="body">
      {/* Admin Page Navbar */}
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
          <Link to="/" className="nav-link">
            <h3>Logout</h3>
          </Link>
        </div>
      </div>

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

      {/* Appointments Table */}
      <div
        className="appointments-table-container"
        style={{
          margin: '40px auto',
          padding: '20px',
          maxWidth: '80%',
          backgroundColor: '#f9f9f9',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'darkblue' }}>
          Appointment Details
        </h2>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '1.1vw',
            textAlign: 'left',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: 'skyblue', color: 'white' }}>
              <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Patient Email</th>
              <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Doctor Email</th>
              <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Appointment Date</th>
              <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Appointment Time</th>
              <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Meeting Link</th>
              <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Check Prescription</th> {/* New column */}
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr
                key={index}
                style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff' }}
              >
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{appointment.patientEmail}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{appointment.doctorEmail}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{appointment.date}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{appointment.time}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                  <button
                    onClick={() => deleteAppointment(appointment.id)}
                    style={{
                      backgroundColor: 'skyblue',
                      color: 'white',
                      border: 'none',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      borderRadius: '5px',
                    }}
                  >
                    Contact
                  </button>
                </td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                  <button
                    onClick={() => viewPrescription(appointment.id)} // Check Prescription Button
                    style={{
                      backgroundColor: 'green',
                      color: 'white',
                      border: 'none',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      borderRadius: '5px',
                    }}
                  >
                    Check Prescription
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

export default AppointmentD;
