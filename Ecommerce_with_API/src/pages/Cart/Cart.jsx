// import React from "react";
// import { useCart } from "../../Cartcontext"; // Adjust the import path as needed
// import "./Cart.css";


// const CartPage = () => {
//     const { cart, updateCartItem, removeCartItem } = useCart();
  
//     const subtotal = cart.reduce((acc, item) => {
//       if (item && item.price && item.quantity) {
//         return acc + item.price * item.quantity;
//       }
//       return acc;
//     }, 0);
  
//     const total = subtotal + 0; // Add shipping or any additional costs if needed
  
//     return (
//       <div className="cart-container">
//         <h2>Cart</h2>
  
//         {/* Cart Table */}
//         <table className="cart-table">
//           <thead>
//             <tr>
//               <th>Product</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Subtotal</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((item) => (
//               <tr key={item.productId}>
//                 <td>
//                   <div className="product-info">
//                     <img src={item.image} alt={item.name} className="product-image" />
//                     <span>{item.name}</span>
//                   </div>
//                 </td>
//                 <td>${item.price ? item.price.toFixed(2) : "N/A"}</td>
//                 <td>
//                   <div className="quantity-controls">
//                     <button onClick={() => updateCartItem(item.productId, item.quantity - 1)}>-</button>
//                     <input type="text" value={item.quantity} readOnly />
//                     <button onClick={() => updateCartItem(item.productId, item.quantity + 1)}>+</button>
//                   </div>
//                 </td>
//                 <td>${item.price && item.quantity ? (item.price * item.quantity).toFixed(2) : "N/A"}</td>
//                 <td>
//                   <button onClick={() => removeCartItem(item.productId)}>Remove</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
  
//         {/* Actions Section */}
//         <div className="actions-container">
//           <button className="btn-back">Return to Shop</button>
//           <button className="btn-update">Update Cart</button>
//         </div>
  
//         {/* Coupon and Cart Total Section */}
//         <div className="coupon-cart-row">
//           <div className="coupon-container">
//             <input type="text" placeholder="Coupon Code" className="coupon-input" />
//             <button className="btn-apply">Apply Coupon</button>
//           </div>
  
//           <div className="cart-summary">
//             <h3>Cart Total</h3>
//             <div className="summary-item">
//               <span>Subtotal:</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className="summary-item">
//               <span>Shipping:</span>
//               <span>Free</span>
//             </div>
//             <div className="summary-item total">
//             <span>Total:</span>
//             <span>${total.toFixed(2)}</span>
//           </div>
//           <button className="btn-checkout">Proceed to Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
import React from "react";
import { useCart } from "../../Cartcontext"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Cart.css";

const CartPage = () => {
  const { cart, updateCartItem, removeCartItem } = useCart();
  const navigate = useNavigate(); // Initialize useNavigate

  const subtotal = cart.reduce((acc, item) => {
    if (item && item.price && item.quantity) {
      return acc + item.price * item.quantity;
    }
    return acc;
  }, 0);

  const total = subtotal + 0; // Add shipping or any additional costs if needed

  const handleProceedToCheckout = () => {
    navigate("/checkout", { state: { cart } }); // Navigate to checkout page with cart data
  };

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
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="product-info">
                  <img src={item.image} alt={item.title} className="product-image" />
                  <span>{item.title}</span>
                </div>
              </td>
              <td>${item.price ? item.price.toFixed(2) : "N/A"}</td>
              <td>
                <div className="quantity-controls">
                  <button onClick={() => updateCartItem(item.id, item.quantity - 1)}>-</button>
                  <input type="text" value={item.quantity} readOnly />
                  <button onClick={() => updateCartItem(item.id, item.quantity + 1)}>+</button>
                </div>
              </td>
              <td>${item.price && item.quantity ? (item.price * item.quantity).toFixed(2) : "N/A"}</td>
              <td>
                <button onClick={() => removeCartItem(item.id)}>Remove</button>
              </td>
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
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="summary-item total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="btn-checkout" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;