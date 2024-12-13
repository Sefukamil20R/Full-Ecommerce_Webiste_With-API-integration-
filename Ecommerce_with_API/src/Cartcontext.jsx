// // CartContext.js
// import React, { createContext, useState, useContext } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (productId, quantity = 1) => {
//     // API call to add product to cart
//     fetch("https://fakestoreapi.com/carts", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         userId: 1, // Assuming a logged-in user with ID 1
//         date: new Date().toISOString(),
//         products: [{ productId, quantity }],
//       }),
//     })
//       .then((res) => res.json())
//       .then((newCart) => {
//         setCart((prevCart) => [...prevCart, ...newCart.products]);
//       })
//       .catch((error) => console.error("Error adding to cart:", error));
//   };

//   const updateCartItem = (productId, quantity) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.productId === productId ? { ...item, quantity } : item
//       )
//     );
//   };

//   const removeCartItem = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.productId !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeCartItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;
// export const useCart = () => useContext(CartContext);
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCartItem = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeCartItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export const useCart = () => useContext(CartContext);