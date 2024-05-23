import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import './App.css'
const products = [
  { id: 1, name: "apple", price: "10" },
  { id: 2, name: "banana", price: "20" },
  { id: 3, name: "orange", price: "30" },
  { id: 4, name: "papaya", price: "40" },
  { id: 5, name: "grapes", price: "50" },
  { id: 6, name: "gauva", price: "80" },
  // Add more products here
];

const App = () => {
  return (
    <div className="app">
      <h1>My Store</h1>
      <div className="container">
      <div className="listing">
        <ProductList products={products} />
      </div>
      <div className="cart">
        <Cart />
      </div>
      </div>
      
    </div>
  );
};

export default App;
