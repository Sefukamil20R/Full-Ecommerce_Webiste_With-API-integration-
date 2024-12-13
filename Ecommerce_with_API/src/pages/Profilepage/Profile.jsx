import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [userData, setUserData] = useState(null); // Holds user data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch user account information when the component loads
    fetch("https://fakestoreapi.com/users/1") // Change `1` to the logged-in user's ID
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }
        return res.json();
      })
      .then((data) => {
        setUserData(data);
        setFormData({
          firstName: data.name.firstname,
          lastName: data.name.lastname,
          email: data.email,
          address: `${data.address.street}, ${data.address.city}, ${data.address.zipcode}`,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to fetch user information. Please try again later.");
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedData = {
      email: formData.email,
      name: {
        firstname: formData.firstName,
        lastname: formData.lastName,
      },
      address: {
        street: formData.address.split(",")[0]?.trim(),
        city: formData.address.split(",")[1]?.trim(),
        zipcode: formData.address.split(",")[2]?.trim(),
      },
    };

    fetch("https://fakestoreapi.com/users/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update user data");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Profile updated successfully:", data);
        alert("Profile updated successfully!");
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to update profile. Please try again later.");
      });
  };

  if (!userData) {
    return <div>Loading user information...</div>; // Show a loading state
  }

  return (
    <div>
        <div className="welcome-banner">
        <h3>Welcome <span>{userData.name.firstname}!</span> </h3>
      </div>
    <div className="profile-container">
      {/* Welcome Section */}
      

      <div className="sidebar">
        <h3>Manage My Account</h3>
        <ul>
          <li className="active">My Profile</li>
          <li>Address Book</li>
          <li>My Payment Options</li>
        </ul>
        <h3>My Orders</h3>
        <ul>
          <li>My Returns</li>
          <li>My Cancellations</li>
        </ul>
        <h3>My Wishlist</h3>
      </div>
      <div className="profile-content">
        <h2>Edit Your Profile</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSave}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <h3>Password Changes</h3>
          <div className="form-group">
            <label>Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-actions">
            <button type="button" className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Profile;
