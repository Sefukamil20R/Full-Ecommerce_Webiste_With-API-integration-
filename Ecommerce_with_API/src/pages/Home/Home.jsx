import React, { useState, useEffect, useRef } from "react";
import { fetchProducts, fetchCategories, fetchProductsByCategory , SortedProducts  } from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import { FaShapes } from "react-icons/fa6";
import back2 from "../../assets/back2.png";
import bottomleft from "../../assets/bottomleft.png";
import bottomright from "../../assets/bottomright.png";
import topleft from "../../assets/rightup.png"
import lefter from "../../assets/lefter.png";
import staticphoto from "../../assets/stats.png";
import '../../services/api';
import './Home.css';
import { FaTruck, FaHeadset, FaRedoAlt } from "react-icons/fa"; // Import icons




const Home = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [categories_, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showProducts, setShowProducts] = useState(false); // Controls whether to display products
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);




  const scrollContainerRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    // fetchProducts()
    //   .then((res) => setProducts(res.data))
    //   .catch((err) => console.error(err));
    fetchProducts()
      .then((res) => {
        setProducts(res.data);
        setVisibleProducts(res.data.slice(0, 8)); // Initially show first 8 products
      })
      .catch((err) => console.error("Error fetching products:", err));
    SortedProducts()
    .then((res) => setSortedProducts(res.data))
    .catch((err) => console.error(err));
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  
  }, []);
  

  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  //   if (category === "") {
  //     fetchProducts()
  //       .then((res) => setProducts(res.data))
  //       .catch((err) => console.error(err));
  //   } else {
  //     fetchProductsByCategory(category)
  //       .then((res) => setProducts(res.data))
  //       .catch((err) => console.error(err));
  //   }
  // };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Set the selected category
    setShowProducts(false); // Hide products until the API call is complete
  
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        console.log("Category Products:", json);
        setProducts(json.slice(0, 4)); // Fetch the first 4 products
        setShowProducts(true); // Show products once fetched
      })
      .catch((err) => console.error("Error fetching category products:", err));
  };
  
  const handleViewAllClick = () => {
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((json) => {
          console.log("All Products:", json);
          setProducts(json); // Update state with all products
        })
        .catch((err) => console.error("Error fetching all products:", err));
    }
  };
  
  
  

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const handleViewAllClickpro = () => {
    setVisibleProducts(products); // Show all products
    setShowAll(true); // Hide "View All Products" button
  };

  const handleProductClick = (productId) => {
    console.log("Navigate to product details for:", productId);
  };

  // const handleProductClick = (productId) => {
  //   console.log("Navigate to product details for:", productId);
  // };

  const cats_list = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        seconds -= 1;

        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="section-container">
        <div className="left-section">
          <ul className="category-list">
            {cats_list.map((category) => (
              <li key={category} className="category-item">
                {category}
                {(category === "Woman’s Fashion" || category === "Men’s Fashion") && (
                  <span className="category-icon">{'>'}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="right-section">
          <img
            src={staticphoto}
            alt="Right Section"
            className="right-section-image"
          />
        </div>
      </div>
      <div className="flash-sales-section">
        <div className="flash-sales-left">
          <div className="flash-sales-icon"></div>
          <div>
            <p className="flash-sales-today">Today’s</p>
            <h2 className="flash-sales-title">Flash Sales</h2>
          </div>
        </div>
        <div className="flash-sales-timer">
          <div className="timer-unit">
            <span className="time">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="unit-label">Days</span>
          </div>
          <span className="separator">:</span>
          <div className="timer-unit">
            <span className="time">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="unit-label">Hours</span>
          </div>
          <span className="separator">:</span>
          <div className="timer-unit">
            <span className="time">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="unit-label">Minutes</span>
          </div>
          <span className="separator">:</span>
          <div className="timer-unit">
            <span className="time">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="unit-label">Seconds</span>
          </div>
        </div>
        <div className="flash-sales-navigation">
          <button className="nav-arrow left-arrow" onClick={() => scroll("left")}>←</button>
          <button className="nav-arrow right-arrow" onClick={() => scroll("right")}>→</button>
        </div>
      </div>
      <div className="product-cards-container-wrapper">
        <div className="product-cards-container" ref={scrollContainerRef}>
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      </div>
      <div className="view-all-container">
        <button className="view-all-button">View All Products</button>
      </div>
      <hr />
      <div className="flash-sales-section">
        <div className="flash-sales-left">
          <div className="flash-sales-icon"></div>
          <div>
          <p className="flash-sales-today 
          ">Catagories</p>
          <h2 className="flash-sales-title">Browse by Catagory</h2>

          </div>

        </div>
       
        <div className="flash-sales-navigation">
          <button className="nav-arrow left-arrow" onClick={() => scroll("left")}>←</button>
          <button className="nav-arrow right-arrow" onClick={() => scroll("right")}>→</button>
        </div>
         
      </div>
      <div className="CCCC">
      {Array.isArray(categories_) &&
        categories_.map((cat) => (
          <div
            key={cat}
            className="citem"
            onClick={() => handleCategoryChange(cat)}
          >
            {/* Icon from react-icons */}
            <div className="cicon">
              <FaShapes size={40} color="#000" />
            </div>
            <p className="ctitle">{cat}</p>
          </div>
        ))}
    </div>
   







    
    {/* Selected Category Title and View All Button */}
{selectedCategory && (
  <div>
    <div className="flash-sales-left" style={{marginLeft : '60px'}}>
      <div className="flash-sales-icon" style={{backgroundColor : 'green'}}></div>
      <div>
        <p className="flash-sales-today" style={{color:"green" , fontWeight :'bold'}}>Available</p>
      </div>
    </div>
    <div className="category-header">
      <h2 className="category-name">{selectedCategory}</h2>
      <button className="view-all-button" onClick={handleViewAllClick}>
        View All
      </button>
    </div>
  </div>
)}

  {/* Product Cards Section */}
  <div className="p-cards-container-wrapper">
    {showProducts ? (
      <div className="p-cards-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={handleProductClick}
          />
        ))}
      </div>
    ) : (
      <p className="no-products-message">Select a category to view products.</p>
    )}
  </div>
  <section class="isec">
  <img src= {back2} alt="Descriptive Alt Text" class="s-image" />
</section>
<div className="flash-sales-left" style = {{margin : '20px 60px'}}>
          <div className="flash-sales-icon"></div>
          <div>
            <p className="flash-sales-today">our products </p>
            <h2 className="flash-sales-title">Explore our Products</h2>
          </div>
        </div>
        <div className="products-containerall">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
      {!showAll && (
        <div className="view-all-containerall">
          <button className="view-all-buttonall" onClick={handleViewAllClickpro}>
            View All Products
          </button>
        </div>
      )}
<div className="flash-sales-left" style = {{margin : '20px 60px'}}>
          <div className="flash-sales-icon"></div>
          <div>
            <p className="flash-sales-today">Featured </p>
            <h2 className="flash-sales-title">New Arrival</h2>
          </div>
        </div>
        <div className="containerlas">
      <div className="left-imagelas">
        <img
          src= {lefter}
          alt="PlayStation 5"
        />
      </div>
      <div className="right-sectionlas">
        <div className="top-rightlas">
          <img
            src= {topleft}
            alt="Women's Collections"
          />
        </div>
        <div className="bottom-rightlas">
          <div className="bottom-right-itemlas">
            <img
              src= {bottomleft}
              alt="Speakers"
            />
          </div>
          <div className="bottom-right-itemlas">
            <img
              src= {bottomright}
              alt="Perfume"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="features-containerall">
      <div className="featureall">
        <FaTruck className="feature-iconall" />
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $40</p>
      </div>
      <div className="featureall">
        <FaHeadset className="feature-iconall" />
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="featureall">
        <FaRedoAlt className="feature-iconall" />
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    </div>




  );
};

export default Home;