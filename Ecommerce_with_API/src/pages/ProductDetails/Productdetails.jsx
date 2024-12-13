import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard"; // Assuming ProductCard is in the same folder
import "./ProductDetails.css";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [relatedProducts, setRelatedProducts] = useState([]);

  const staticColors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"]; // Define static colors

  useEffect(() => {
    if (product && product.category) {
      // Fetch related products from the same category
      fetch(`https://fakestoreapi.com/products/category/${product.category}`)
        .then((res) => res.json())
        .then((data) => {
          // Filter out the current product from the related products
          const filteredProducts = data.filter((item) => item.id !== product.id);
          setRelatedProducts(filteredProducts);
        })
        .catch((error) => console.error("Error fetching related products:", error));
    }
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        {/* Left Section: Product Images */}
        <div className="product-images">
          <div className="thumbnail-images">
            {product.images && product.images.map((img, index) => (
              <img key={index} src={img} alt={`Thumbnail ${index + 1}`} />
            ))}
          </div>
          <div className="main-image">
            <img src={product.image} alt={product.title} />
          </div>
        </div>

        {/* Right Section: Product Info */}
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>

          {/* Ratings */}
          <div className="product-rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">☆</span> 
            <span className="review-count">(200 reviews)</span>
          </div>

          {/* Price */}
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>

          {/* Colors */}
          <div className="product-colors">
            <p>Colours:</p>
            <div className="color-options">
              {staticColors.map((color, index) => (
                <button
                  key={index}
                  className="color-option"
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          {/* Quantity Selector and Buttons */}
          <div className="action-section">
            <div className="quantity-selector">
              <button>-</button>
              <input type="text" value="1" readOnly />
              <button>+</button>
            </div>
            <button className="buy-now-button">Buy Now</button>
          </div>

          {/* Delivery Info */}
          <div className="delivery-info">
            <p>✓ Free Delivery</p>
            <p>✓ Return Policy: 10 Days</p>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="related-items">
        <h2>Related Items</h2>
        <div className="related-products">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.id}
              product={relatedProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;