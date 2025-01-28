import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState(""); // State for error handling
  const [isSubmitting, setIsSubmitting] = useState(false); // State for button loading
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(""); // Clear any previous errors
    try {
      await axios.post("https://backend-wexa.onrender.com/auth/register", formData);
      alert("Signup successful!");
      navigate("/"); // Redirect to login page
    } catch (error) {
      // Handle error response and set error message
      setError(error.response?.data?.detail || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false); // Reset the button state
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f1f7fe",
      padding: "16px",
    },
    formBox: {
      maxWidth: "400px",
      width: "100%",
      background: "#ffffff",
      borderRadius: "12px",
      padding: "24px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontWeight: "bold",
      fontSize: "1.6rem",
      marginBottom: "8px",
    },
    subtitle: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "16px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "12px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "1rem",
    },
    button: {
      backgroundColor: isSubmitting ? "#ccc" : "#007bff", // Change color when submitting
      color: "#fff",
      padding: "12px",
      border: "none",
      borderRadius: "24px",
      fontSize: "1rem",
      cursor: isSubmitting ? "not-allowed" : "pointer",
      width: "100%",
      marginTop: "12px",
      transition: "background-color 0.3s ease",
    },
    footer: {
      marginTop: "16px",
      fontSize: "0.9rem",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
    },
    errorText: {
      color: "red",
      fontSize: "0.9rem",
      marginBottom: "12px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <form onSubmit={handleSubmit}>
          <h2 style={styles.title}>Sign up</h2>
          <p style={styles.subtitle}>Create a free account with your email.</p>
          {error && <p style={styles.errorText}>{error}</p>} {/* Display error message */}
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            style={styles.input}
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            style={styles.input}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" style={styles.button} disabled={isSubmitting}>
            {isSubmitting ? "Signing up..." : "Sign up"} {/* Button text changes */}
          </button>
        </form>
        <div style={styles.footer}>
          <p>
            Have an account?{" "}
            <a href="/" style={styles.link}>
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
