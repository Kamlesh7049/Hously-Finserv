import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPercentage, FaHome, FaBriefcase, FaBuilding, FaExchangeAlt } from "react-icons/fa";
import cbls from "../assets/images/cblscore.png";

// 🎯 Promo Banner Component
const PromoBanner = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ Fixed state issue

  return (
    <>
      {/* 🔘 Toggle Button */}
      <Button
        variant="dark"
        className="position-fixed"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          top: "50%",
          right: isOpen ? "230px" : "10px",
          transform: "translateY(-50%)",
          zIndex: 1100,
          borderRadius: "50%",
          padding: "6px 10px",
          fontSize: "14px",
        }}
      >
        {isOpen ? "X" : "Check Your Cibil"}
      </Button>

      {/* 📊 Sliding Promo Sidebar */}
      <div
        className="position-fixed d-flex flex-column align-items-center bg-dark text-white p-3 rounded shadow-lg"
        style={{
          top: "50%",
          right: isOpen ? "10px" : "-250px",
          transform: "translateY(-50%)",
          transition: "right 0.4s ease-in-out",
          zIndex: 1000,
          width: "220px",
          borderRadius: "25px",
        }}
      >
        <div className="d-flex align-items-center">
          <img src={cbls} alt="Credit Score Meter" className="me-2" style={{ width: "40px" }} />
          <div>
            <h6 className="mb-1" style={{ fontSize: "12px" }}>
              Get your CIBIL Credit Report{" "}
              <span className="text-warning text-decoration-line-through">₹500</span> for{" "}
              <span className="text-warning">FREE</span>
            </h6>
            <p className="mb-0 text-white-50" style={{ fontSize: "10px" }}>
              5 Lac+ people have checked their Credit Score!
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Button variant="light" className="fw-bold text-dark mt-2" style={{ fontSize: "12px", padding: "6px 12px" }}>
          Check Your <span className="text-danger">FREE</span> Credit Score →
        </Button>
      </div>
    </>
  );
};

// 🎯 Loan Offers Component
const LoanOffers = () => {
  const loanData = [
    {
      title: "Home Loan",
      description: "Instant approval at lowest interest rates",
      rate: "8.35%",
      bgColor: "#0074D9",
      icon: <FaHome size={30} color="#0074D9" />,
    },
    {
      title: "Loan Against Property",
      description: "Lowest interest rate",
      rate: "9.2%",
      bgColor: "#FFD700",
      icon: <FaBuilding size={30} color="#FFD700" />,
    },
    {
      title: "Balance-Transfer Loan",
      description: "Paperless process at low rate",
      rate: "10.49%",
      bgColor: "#0074D9",
      icon: <FaExchangeAlt size={30} color="#0074D9" />,
    },
    {
      title: "Business Loan",
      description: "Interest rate starting from",
      rate: "14%",
      bgColor: "#FFD700",
      icon: <FaBriefcase size={30} color="#FFD700" />,
    },
  ];

  return (
    <>
      {/* Google Font Import */}
      <link href="https://fonts.googleapis.com/css2?family=Glacial+Indifference&display=swap" rel="stylesheet" />

      <Container className="my-5" style={{ fontFamily: "'Glacial Indifference', sans-serif" }}>
        <Row className="justify-content-between align-items-center">
          {/* Left Side: Heading */}
          <Col md={8} className="text-start">
            <h2 className="fw-bold text-black">🔥 Trending Loans & Offers</h2>
            <p className="text-muted">We offer the best financial products and services with a hassle-free process.</p>
          </Col>

          {/* Right Side: Smaller Promo Banner */}
          <Col md={4} className="d-flex justify-content-end">
            <PromoBanner />
          </Col>
        </Row>

        <Row className="mt-4">
          {loanData.map((loan, index) => (
            <Col key={index} lg={3} md={6} sm={12} className="mb-4 d-flex align-items-stretch">
              <Card
                style={{
                  borderRadius: "15px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  backgroundColor: "#E8E8E8",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <Card.Body className="d-flex flex-column justify-content-between text-center">
                  <div className="mb-3">{loan.icon}</div>
                  <div>
                    <Card.Title className="fw-bold text-black">{loan.title}</Card.Title>
                    <Card.Text className="text-muted">{loan.description}</Card.Text>
                  </div>
                  <div>
                    <div
                      className="py-2 px-3 rounded text-white d-inline-block"
                      style={{ backgroundColor: loan.bgColor }}
                    >
                      <FaPercentage className="me-2" size={20} /> {loan.rate}
                    </div>
                  </div>
                  <Button variant="link" className="mt-2 text-decoration-none fw-bold" style={{ color: "#0074D9" }}>
                    Check Eligibility &rarr;
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default LoanOffers;
