import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaMobileAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will get back to you soon.`);
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <>
      {/* Contact Header Section */}
      <div className="text-light text-center py-5" style={headerStyle}>
        <h1 className="fw-bold">Contact Us</h1>
        <p className="lead" style={{ color: "#FFD700" }}>
          We would love to hear from you! Call us or fill out the form.
        </p>
      </div>

      {/* Contact Form & Info */}
      <div className="container my-5">
        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="p-4 rounded shadow-lg bg-light">
              <h4 className="fw-bold" style={{ color: "#0074D9" }}>Get in Touch</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label"><FaUser /> Name</label>
                  <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label"><FaEnvelope /> Email</label>
                  <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label"><FaMobileAlt /> Mobile</label>
                  <input type="tel" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label"><FaEnvelope /> Message</label>
                  <textarea className="form-control" name="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn w-100 submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-6 text-light p-4 rounded shadow-lg" style={infoBoxStyle}>
            <h4 className="fw-bold" style={{ color: "#FFD700" }}>Contact Details</h4>
            <p>
              <FaPhone /> Toll-Free Number:{" "}
              <a href="tel:00000000000" className="call-link">00000000000</a>
            </p>
            <p>
              <FaEnvelope /> Email:{" "}
              <a href="mailto:support@houslyffin.com" className="email-link">support@houslyffin.com</a>
            </p>
            <p>
              <FaMapMarkerAlt /> Address:{" "}
              <strong>Rahatani Rd, Madhuban Colony, Rahatani, Pimpri-Chinchwad, Maharashtra 411017</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Nodal Officer Section */}
      <div className="container my-5">
        <h4 className="fw-bold text-center mb-4" style={{ color: "#0074D9" }}>Nodal Grievance Redressal Officer</h4>
        <div className="row text-center">
          <div className="col-md-4">
            <p><strong>Name:</strong> Mr. Laxhman Sir</p>
          </div>
          <div className="col-md-4">
            <p><strong>Designation:</strong> Director</p>
          </div>
          <div className="col-md-4">
            <p><strong>Call:</strong> <a href="tel:+919340479217" className="call-link">+91 9340479217</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

// ✅ Styles
const headerStyle = {
  background: "linear-gradient(45deg, #0074D9, #0056b3)",
};

const infoBoxStyle = {
  background: "#222",
  borderRadius: "10px",
  transition: "all 0.3s ease",
};

const callLinkStyle = {
  color: "#FFD700",
  fontWeight: "bold",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

export default ContactUs;
