import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/Home";
import CartContext, { CartProvider } from "./CartContext/";
import "./App.css";
// import Contact from "./pages/Contact";
import About from "./pages/About/About";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Signup/login";
import CheckoutPage from "./pages/checkout/Checkout";
import CartPage  from "./pages/Cart/Cart";
import { WishlistProvider } from "./WishlistContext"; // Import WishlistProvider
import WishlistPage from "./pages/Wishlist/WishlistPage"; // Import WishlistPage
import Profilepage from "./pages/Profilepage/Profile";
import ProductDetails from "./pages/ProductDetails/Productdetails";
import ContactUs from "./pages/Contact/Contact";
import NotFoundPage from "./pages/404/404"; // Import NotFoundPage

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/contact" element={<ContactUs />} />
        
        <Route path="/About" element={<About />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/wishlist" element={<WishlistPage />} /> {/* Add WishlistPage route */}
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/product/:id" element={<ProductDetails />} /> {/* Add ProductDetails route */}
        <Route path="*" element={<NotFoundPage />} /> 

        </Routes>
      <Footer />
    </Router>
    </WishlistProvider>

    </CartProvider>

  );
};

export default App;
