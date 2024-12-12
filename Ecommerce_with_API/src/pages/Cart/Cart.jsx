import React from "react";
import "./Cart.css";

const CartPage = () => {
  const cartItems = [
    { id: 1, name: "LCD Monitor", price: 250, quantity: 1, image: "/lcd.jpg" },
    { id: 2, name: "Gaming Keyboard", price: 150, quantity: 1, image: "/keyboard.jpg" },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>

      {/* Cart Table */}
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="product-info">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <span>{item.name}</span>
                </div>
              </td>
              <td>${item.price}</td>
              <td>
                <div className="quantity-controls">
                  <button>-</button>
                  <input type="text" value={item.quantity} readOnly />
                  <button>+</button>
                </div>
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Actions Section */}
      <div className="actions-container">
        <button className="btn-back">Return to Shop</button>
        <button className="btn-update">Update Cart</button>
      </div>

      {/* Coupon and Cart Total Section */}
      <div className="coupon-cart-row">
        <div className="coupon-container">
          <input type="text" placeholder="Coupon Code" className="coupon-input" />
          <button className="btn-apply">Apply Coupon</button>
        </div>

        <div className="cart-summary">
          <h3>Cart Total</h3>
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="summary-item">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="summary-item total">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <button className="btn-checkout">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
