import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/Home";
import "./App.css";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Signup/login";
import CartPage  from "./pages/Cart/Cart";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         {/* <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/CartPage" element={<CartPage />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
