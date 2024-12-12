// import React from "react";
// import "./Auth.css";
// import auth from '../../assets/auth.png';
// import { Link } from "react-router-dom";

// const Signup = () => {
//   return (
//     <div className="auth-container">
//       <div className="auth-image">
//         <img
//           src= {auth} // Replace with your image path
//           alt="Shopping Cart and Phone"
//         />
//       </div>
//       <div className="auth-form">
//         <h2>Create an account</h2>
//         <p>Enter your details below</p>
//         <form>
//           <input type="text" placeholder="Name" required />
//           <input type="email" placeholder="Email or Phone Number" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit" className="auth-button">
//             Create Account
//           </button>
//         </form>
//         <div className="divider">or</div>
//         <button className="google-button">Sign up with Google</button>
//         <p>
//         Already have an account? <Link to="/login">Log in</Link> {/* Use Link */}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import "./Auth.css";
import auth from "../../assets/auth.png";
import { Link, useNavigate } from "react-router-dom";
import API from "../../services/api"; // Import your axios instance

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Sending signup data using your axios instance
      await API.post("/users", {
        email: formData.email,
        username: formData.name,
        password: formData.password,
      });
      navigate("/login"); // Redirect to login page after successful signup
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
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
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
            Create Account
          </button>
        </form>
        <div className="divider">or</div>
        <button className="google-button">Sign up with Google</button>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
