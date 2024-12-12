import axios from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: { "Content-Type": "application/json" },

});
export default API;

export const fetchProducts = () => API.get("/products");
export const fetchCategories = () => API.get("products/categories");
export const SortedProducts = () => API.get("/products?sort=desc");
export const fetchProductsByCategory = (category) => API.get(`/products/category/${category}`);
