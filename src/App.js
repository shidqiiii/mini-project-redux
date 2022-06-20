import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Home from './Pages/HomePage'
import Product from './Pages/ProductPage'
import ShoppingCart from './Pages/ShoppingCartPage'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <ToastContainer />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/chart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
