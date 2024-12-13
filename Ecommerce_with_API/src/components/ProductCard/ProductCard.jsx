// import React from "react";
// import "./ProductCard.css";

// const ProductCard = ({ product, onAddToCart }) => {
//   return (
//     <div className="product-card">
//       <div className="frame">
//         <div className="discount-badge">-35%</div>

//         <div className="icon-buttons">
//           <button className="wishlist-btn">♥</button>
//           <button className="view-btn">👁</button>
//         </div>

//         <div className="product-card-image">
//           <img src={product.image} alt={product.title} />
//         </div>
//       </div>

//       {/* Add to Cart Button */}
//       <button
//         className="buy-now-button"
//         onClick={() => onAddToCart(product.id)}
//       >
//         Add To Cart
//       </button>

//       <div className="product-card-details">
//         <p className="product-title">{product.title}</p>
//         <div className="product-pricing">
//           <span className="product-price">${product.price.toFixed(2)}</span>
//           <span className="original-price">
//             ${(product.price * 1.2).toFixed(2)}
//           </span>
//         </div>
//         <div className="product-rating">
//           <span className="star">★</span>
//           <span className="star">★</span>
//           <span className="star">★</span>
//           <span className="star">★</span>
//           <span className="star">☆</span> <span>(75)</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../WishlistContext"; // Adjust the import path as needed
import { useCart } from "../../Cartcontext"; // Adjust the import path as needed
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [showWishlistPopup, setShowWishlistPopup] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);

  const handleAddToWishlist = () => {
    addToWishlist(product);
    setShowWishlistPopup(true);
    setTimeout(() => setShowWishlistPopup(false), 2000); // Hide popup after 2 seconds
  };

  const handleAddToCart = () => {
    addToCart(product);
    setShowCartPopup(true);
    setTimeout(() => setShowCartPopup(false), 2000); // Hide popup after 2 seconds
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="product-card" onClick={handleProductClick}>
      <div className="frame">
        <div className="discount-badge">-35%</div>

        <div className="icon-buttons">
          <button className="wishlist-btn" onClick={(e) => { e.stopPropagation(); handleAddToWishlist(); }}>♥</button>
          <button className="view-btn" onClick={(e) => e.stopPropagation()}>👁</button>
        </div>

        <div className="product-card-image">
          <img src={product.image} alt={product.title} />
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        className="buy-now-button"
        onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}
      >
        Add To Cart
      </button>

      <div className="product-card-details">
        <p className="product-title">{product.title}</p>
        <div className="product-pricing">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <span className="original-price">
            ${(product.price * 1.2).toFixed(2)}
          </span>
        </div>
        <div className="product-rating">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">☆</span> <span>(75)</span>
        </div>
      </div>

      {showWishlistPopup && <div className="wishlist-popup">Added to Wishlist!</div>}
      {showCartPopup && <div className="cart-popup">Added to Cart!</div>}
    </div>
  );
};

export default ProductCard;