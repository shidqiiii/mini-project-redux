import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css';
import Home from './Pages/HomePage'
import Product from './Pages/ProductPage'
import ShoppingCart from './Pages/ShoppingCartPage'

function App() {
  return (
    <>
      <div>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/chart">Chart</Link>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/chart" element={<ShoppingCart />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
