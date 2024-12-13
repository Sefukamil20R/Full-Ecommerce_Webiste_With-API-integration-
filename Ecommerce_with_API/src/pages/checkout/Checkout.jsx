import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = location.state || { cart: [] };

  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    email: "",
    saveInfo: false,
    paymentMethod: "cash",
    couponCode: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePlaceOrder = () => {
    const orderData = {
      userDetails: formData,
      cartItems: cart,
      totalAmount: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    };

    // Simulate order placement by submitting data to the API
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Order placed successfully:", data);
        setFeedbackMessage("Order placed successfully!");
        // Optionally, navigate to a confirmation page
        // navigate("/order-confirmation", { state: { order: data } });
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        setFeedbackMessage(`Error placing order: ${error.message}`);
      });
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout-page">
      {/* Left Section - Billing Details */}
      <div className="billing-details">
        <h2>Billing Details</h2>
        <form className="billing-form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={handleChange}
          />
          <input
            type="text"
            name="apartment"
            placeholder="Apartment, floor, etc. (optional)"
            value={formData.apartment}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="Town/City"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="save-info">
            <input
              type="checkbox"
              id="save-info"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
            />
            <label htmlFor="save-info">
              Save this information for future checkout next time
            </label>
          </div>
        </form>
      </div>

      {/* Right Section - Order Summary */}
      <div className="order-summary">
        <div className="order-items">
          {cart.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="order-pricing">
          <div className="price-row">
            <p>Subtotal</p>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="price-row">
            <p>Shipping</p>
            <span>Free</span>
          </div>
          <div className="price-row total">
            <p>Total</p>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
        <div className="payment-method">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={formData.paymentMethod === "cash"}
              onChange={handleChange}
            />
            Cash on delivery
          </label>
          <div className="coupon">
            <input
              type="text"
              name="couponCode"
              placeholder="Coupon Code"
              value={formData.couponCode}
              onChange={handleChange}
            />
            <button className="apply-btn">Apply Coupon</button>
          </div>
        </div>
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
        {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
      </div>
    </div>
  );
};

export default CheckoutPage;