import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const calculators = [
  {
    title: "EMI Calculator",
    description: "A Home Loan EMI Calculator permits you to compute your monthly payments.",
    buttonText: "Calculate EMI",
    icon: "📊",
    path: "/emicalculator",
  },
  {
    title: "Eligibility Calculator",
    description: "Determine your housing loan eligibility through the Home Loan.",
    buttonText: "Check Now",
    icon: "📋",
    path: "/eligibilitycalculator",
  },
  {
    title: "Foreclose Calculator",
    description: "Compare interest rates from various banks to make informed decisions.",
    buttonText: "Compare Now",
    icon: "💰",
    path: "/foreclosecalculator",
  },
];

const CalculatorSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Google Font Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Glacial+Indifference&display=swap"
        rel="stylesheet"
      />

      <div
        className="container py-4 bg-light min-vh-100 d-flex flex-column align-items-center"
        style={{ width: "90%", fontFamily: "'Glacial Indifference', sans-serif" }}
      >
        <h2
          className="text-center fw-bold mb-3"
          style={{
            fontSize: "2rem",
            color: "#212529",
            WebkitBackgroundClip: "text",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.32)",
          }}
        >
          Financial Calculators
        </h2>
        <p className="text-center mx-auto mb-4 w-75" style={{ fontSize: "1rem", color: "#444" }}>
          We aim to ease the burden of credit procedures through the help of financial calculators.
          Compute your monthly payments in advance for better management.
        </p>
        <div className="row g-3 w-100 justify-content-center">
          {calculators.map((calc, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card shadow-lg text-center p-3 border-0 rounded-lg"
                style={{
                  transition: "transform 0.3s",
                  cursor: "pointer",
                  borderRadius: "20px",
                  backgroundColor: "#E8E8E8",
                  fontFamily: "'Glacial Indifference', sans-serif",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                <div className="fs-1 mb-2">{calc.icon}</div>
                
                {/* Title color changed to black */}
                <h5 className="fw-semibold mb-2" style={{ color: "#000" }}>{calc.title}</h5>

                <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>{calc.description}</p>
                <button
                  className="btn rounded-pill px-4 py-2 fw-bold shadow-sm"
                  style={{ backgroundColor: "#0074d9", color: "#fff", border: "none" }}
                  onClick={() => handleNavigation(calc.path)}
                >
                  {calc.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CalculatorSection;
