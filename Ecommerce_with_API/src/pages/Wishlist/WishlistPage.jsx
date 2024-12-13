import React from "react";
import { useWishlist } from "../../WishlistContext"; // Adjust the import path as needed
import ProductCard from "../../components/ProductCard/ProductCard"; // Adjust the import path as needed
import "./Wishlist.css";

const WishlistPage = () => {
  const { wishlist } = useWishlist();
//   const [visibleProducts, setVisibleProducts] = useState([]);
//   const [showAll, setShowAll] = useState(false);
  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h2>Wishlist ({wishlist.length})</h2>
        <button className="move-to-blog-btn">Move to Blog</button>
      </div>
      <div className="wishlist-items">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flash-sales-left">
        <div className="uff">
        <div className="flash-sales-icon"></div>
          <div>
            <p className="flash-sales-today">Just For You</p>
          </div>
        </div>
          
          <button>See all</button>
        </div>
    </div>
  );
};

export default WishlistPage;