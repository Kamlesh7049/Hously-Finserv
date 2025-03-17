import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaUniversity, FaCalculator, FaEnvelope } from "react-icons/fa"; // Import Icons

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const primaryColor = "#0074d9"; // Blue for Button
  const secondaryColor = "#ffd700"; // Yellow for Hover
  const textColor = "#fff"; // White text for button

  // Menu Items with Icons
  const menuItems = [
    { name: "Home", icon: <FaHome />, link: "/home" },
    { name: "Bank", icon: <FaUniversity />, link: "/bank" },
    { name: "Calculator", icon: <FaCalculator />, link: "/calculator" },
    { name: "About", icon: <FaEnvelope />, link: "/About" },
  ];

  return (
    <>
      {/* Google Font Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Glacial+Indifference&display=swap"
        rel="stylesheet"
      />

      {/* Top Navbar */}
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "15px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 999,
          fontFamily: "'Glacial Indifference', sans-serif",
        }}
      >
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand as={Link} to="/">
            <img src="./src/assets/images/logo.jpeg" alt="Logo" width="180" height="30" />
          </Navbar.Brand>

          {/* Sidebar Toggle Button */}
          <Button
            onClick={handleToggleSidebar}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.8rem",
              cursor: "pointer",
              color: "#000",
            }}
          >
            <FaBars />
          </Button>
        </Container>
      </Navbar>

      {/* Right-Side Sliding Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isSidebarOpen ? "0" : "-300px", // Slide effect
          width: "300px",
          height: "100vh",
          backgroundColor: "#f8f9fa",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          padding: "20px",
          transition: "right 0.4s ease-in-out",
          fontFamily: "'Glacial Indifference', sans-serif",
          zIndex: 1000,
        }}
      >
        {/* Close Button */}
        <Button
          onClick={handleToggleSidebar}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.8rem",
            cursor: "pointer",
            color: "#000",
            position: "absolute",
            top: "15px",
            right: "15px",
          }}
        >
          <FaTimes />
        </Button>

        {/* Navigation Links with Icons */}
        <Nav className="d-flex flex-column mt-5">
          {menuItems.map((item, index) => (
            <Nav.Link
              key={index}
              as={Link}
              to={item.link}
              onClick={handleToggleSidebar}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "15px",
                fontSize: "18px",
                fontWeight: "600",
                color: "#000",
                borderRadius: "8px",
                backgroundColor: "transparent",
                transition: "background-color 0.3s ease",
                fontFamily: "'Glacial Indifference', sans-serif",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = secondaryColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              {item.icon} {item.name}
            </Nav.Link>
          ))}

          {/* Login Button */}
          <Button
            className="mt-4"
            style={{
              padding: "10px 25px",
              borderRadius: "30px",
              backgroundColor: primaryColor, // Blue
              color: textColor, // White text
              fontWeight: "600",
              fontSize: "16px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
              border: "none",
              fontFamily: "'Glacial Indifference', sans-serif",
            }}
            onClick={handleToggleSidebar}
          >
            Login
          </Button>
        </Nav>
      </div>
    </>
  );
};

export default Header;
