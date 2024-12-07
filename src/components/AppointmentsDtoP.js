import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from './logo.jpg';

const AppointmentDtoP = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctorEmail, setDoctorEmail] = useState("");
  const [doctorSelected, setDoctorSelected] = useState(false);
  const [file, setFile] = useState(null);
  const username = localStorage.getItem("un");

  useEffect(() => {
    if (doctorSelected) {
      const fetchAppointments = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/appointments1`, {
            params: {
              email: username,
              doctorEmail: doctorEmail,
            },
          });
          setAppointments(response.data);
        } catch (error) {
          console.error("Error fetching appointments:", error);
        }
      };
      fetchAppointments();
    }
  }, [doctorSelected, doctorEmail]);

  const handleDoctorEmailSubmit = () => {
    if (!doctorEmail) {
      alert("Please enter a doctor's email");
      return;
    }
    setDoctorSelected(true);
  };

  const handleAttend = (appointment) => {
    alert(`Attending appointment with patient: ${appointment.patientEmail}`);
  };

  const handlePrescriptionUpload = async (appointment, event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file); // Correct name for 'file' part
      formData.append("patientEmail", appointment.patientEmail);
      formData.append("doctorEmail", appointment.doctorEmail);

      try {
        await axios.post("http://localhost:8080/uploadPrescription", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Prescription uploaded successfully.");
      } catch (error) {
        if (error.response) {
          console.error("Error uploading prescription:", error.response.data);
          alert(`Error: ${error.response.data.message || "Failed to upload prescription."}`);
        } else if (error.request) {
          console.error("Error with the request:", error.request);
          alert("Error with the request. Please check the server.");
        } else {
          console.error("General error:", error.message);
          alert("An error occurred: " + error.message);
        }
      }
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="body">
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: '50px', height: '50px', cursor: 'pointer' }} src={Logo} alt='Logo' />
          <h1 style={{ marginLeft: '10px', fontSize: '2vw' }}>
            <span style={{ color: 'white' }}>MEDI</span><span style={{ color: 'darkblue' }}>SYNC</span>
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" className="nav-link">
            <h3>Logout</h3>
          </Link>
        </div>
      </div>

      <div style={{ textAlign: 'right', marginRight: '20px', fontSize: '0.8vw', color: 'darkblue', fontWeight: '600', padding: '10px 20px', borderRadius: '10px' }}>
        <h2>Welcome, {username}!</h2>
      </div>

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <input
          type="email"
          placeholder="Enter Doctor's Email"
          value={doctorEmail}
          onChange={(e) => setDoctorEmail(e.target.value)}
          style={{ padding: '8px', fontSize: '1vw' }}
        />
        <button
          onClick={handleDoctorEmailSubmit}
          style={{
            marginLeft: '10px',
            padding: '8px 12px',
            fontSize: '1vw',
            backgroundColor: 'skyblue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Search Appointments
        </button>
      </div>

      {doctorSelected && (
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
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'darkblue' }}>Appointment Details</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.1vw', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: 'skyblue', color: 'white' }}>
                <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Patient Email</th>
                <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Doctor Email</th>
                <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Appointment Date</th>
                <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Appointment Time</th>
                <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff' }}>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{appointment.patientEmail}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{appointment.doctorEmail}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{appointment.date}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{appointment.time}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => handleAttend(appointment)}
                      style={{
                        padding: '6px 12px',
                        fontSize: '1vw',
                        backgroundColor: 'lightgreen',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                      }}
                    >
                      Attend
                    </button>
                    <label style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
                      Prescription
                      <input
                        type="file"
                        style={{ display: 'none' }}
                        onChange={(e) => handlePrescriptionUpload(appointment, e)}
                      />
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

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
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
          <Link to="/terms" style={{ color: 'white', textDecoration: 'none' }}>Terms & Conditions</Link>
          <Link to="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default AppointmentDtoP;
