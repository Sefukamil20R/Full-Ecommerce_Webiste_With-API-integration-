// import React from "react";
// import "./Auth.css";
// import auth from '../../assets/auth.png';

// const Login = () => {
//   return (
//     <div className="auth-container">
//       <div className="auth-image">
//         <img
//           src= {auth}
//           alt="Shopping Cart and Phone"
//         />
//       </div>
//       <div className="auth-form">
//         <h2>Log in to Exclusive</h2>
//         <p>Enter your details below</p>
//         <form>
//           <input type="email" placeholder="Email or Phone Number" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit" className="auth-button">
//             Log In
//           </button>
//         </form>
//         <div className="forgot-password">
//           <a href="/forgot-password">Forgot Password?</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import "./Auth.css";
import auth from "../../assets/auth.png";
import { useNavigate } from "react-router-dom";
import  API  from "../../services/api"; // Import your axios instance

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/login", {
        username: formData.username,
        password: formData.password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Store the token for authentication
        navigate("/"); // Navigate to the home page after successful login
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image">
        <img src={auth} alt="Shopping Cart and Phone" />
      </div>
      <div className="auth-form">
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Email or Phone Number"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="auth-button">
            Log In
          </button>
        </form>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
