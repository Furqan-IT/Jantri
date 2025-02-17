import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import user_icon from "/src/assets/person.png";
import email_icon from "/src/assets/email.png";
import password_icon from "/src/assets/password.png";

const Login = ({ setIsAuthenticated }) => {
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Adjust endpoints to match your backend routes.
    const endpoint =
      action === "Sign Up" ? "/api/user/register" : "/api/user/auth";
    // For login, send only phone and password.
    const payload =
      action === "Sign Up"
        ? formData
        : { phone: formData.phone, password: formData.password };

    try {
      const response = await fetch(`http://148.135.136.132:3000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Something went wrong");
        return;
      }

      const data = await response.json();

      if (action === "Sign Up") {
        alert("You're Registered successfully, now please login");
        setAction("Login");
        // Optionally clear the signup-specific fields
        setFormData({ ...formData, name: "", email: "" });
      } else if (action === "Login") {
        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify(data));
        // Update authentication state
        setIsAuthenticated(true);
        alert("You're Successfully Logged in");
        navigate("/home");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to the server");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <div className="auth-text">{action}</div>
        <div className="auth-underline"></div>
      </div>
      <div className="auth-inputs">
        {action === "Login" ? null : (
          <>
            <div className="auth-input">
              <img src={user_icon} alt="user icon" />
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="auth-input">
              <img src={email_icon} alt="email icon" />
              <input
                type="email"
                name="email"
                placeholder="Enter E-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        <div className="auth-input">
          <img src={password_icon} alt="phone icon" />
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="auth-input">
          <img src={password_icon} alt="password icon" />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="auth-forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}
      <div className="auth-submit-container">
        <div
          className={action === "Login" ? "auth-submit gray" : "auth-submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "auth-submit gray" : "auth-submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
        <div className="auth-submit-final" onClick={handleSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default Login;
