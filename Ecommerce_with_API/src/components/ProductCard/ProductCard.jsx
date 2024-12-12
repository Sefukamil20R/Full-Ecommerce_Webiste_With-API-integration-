import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={() => onClick(product.id)}>
      <div className="frame">
        {/* Discount Badge */}
        <div className="discount-badge">-35%</div>

        {/* Wishlist and View Buttons */}
        <div className="icon-buttons">
          <button className="wishlist-btn">♥</button>
          <button className="view-btn">👁</button>
        </div>

        {/* Product Image */}
        <div className="product-card-image">
          <img src={product.image} alt={product.title} />
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="buy-now-button">Add To Cart</button>

      {/* Product Details */}
      <div className="product-card-details">
        <p className="product-title">{product.title}</p>

        <div className="product-pricing">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <span className="original-price">${(product.price * 1.2).toFixed(2)}</span> {/* Assuming 20% off */}
        </div>

        {/* Rating */}
        <div className="product-rating">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">☆</span> <span>(75)</span>
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard;