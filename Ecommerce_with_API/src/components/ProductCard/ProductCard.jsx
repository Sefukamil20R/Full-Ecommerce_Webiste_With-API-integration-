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
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="frame">
        <div className="discount-badge">-35%</div>

        <div className="icon-buttons">
          <button className="wishlist-btn">♥</button>
          <button className="view-btn">👁</button>
        </div>

        <div className="product-card-image">
          <img src={product.image} alt={product.title} />
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        className="buy-now-button"
        onClick={() => onAddToCart(product)}
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
    </div>
  );
};

export default ProductCard;