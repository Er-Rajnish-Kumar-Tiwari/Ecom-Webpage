import './App.css';
import Catogeries from './catogeries.js';
import Product from './product.js';
import Tan from './newlogo.jpg';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RT from "./rt.gif";

function App() {

  const navbarStyle = { height: "90px", backgroundColor: "#d9534f" };
  const navItemStyle = { fontSize: "20px", fontWeight: "bold" };
  const searchInputStyle = { width: "100%", maxWidth: "700px", paddingRight: "50px" };
  const buttonStyle = { backgroundColor: "wheat", color: "black" };

  // Categories works display on screen
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);  

  function getcato() {
    setCategoriesLoading(true); 
    axios.get('https://dummyjson.com/products/category-list')
      .then((res) => res.data)
      .then((final) => {
        setCategories(final);
        setCategoriesLoading(false); 
      })
  }

  useEffect(() => {
    getcato();
  }, []);

  // Product works display on screen
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);  

  const getProducts = () => {
    setProductsLoading(true); 
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
        setProductsLoading(false); 
      })
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Works on current categories
  let [catname, setcatname] = useState('');

  useEffect(() => {
    if (catname !== '') {
      setProductsLoading(true); 
      axios.get(`https://dummyjson.com/products/category/${catname}`)
        .then((response) => {
          setProducts(response.data.products);
          setProductsLoading(false); 
        })
    }
  }, [catname]);

  // Click on product get the product details

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-lite" style={navbarStyle}>
        <div className="container-fluid">
          <img src={Tan} alt="Logo" style={{ width: "120px", height: "70px" }} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse w-100" id="navbarNav">
            <ul className="navbar-nav w-50 d-flex justify-content-evenly">
              <li className="nav-item" style={navItemStyle}>
                <button className="nav-link active text-light" onClick={() => { /* Handle click here */ }}>
                  Home
                </button>
              </li>
              <li className="nav-item" style={navItemStyle}>
                <button className="nav-link text-light" onClick={() => { /* Handle click here */ }}>
                  About-Us
                </button>
              </li>
              <li className="nav-item" style={navItemStyle}>
                <button className="nav-link text-light" onClick={() => { /* Handle click here */ }}>
                  Location
                </button>
              </li>
              <li className="nav-item" style={navItemStyle}>
                <button className="nav-link text-light" onClick={() => { /* Handle click here */ }}>
                  Language
                </button>
              </li>
            </ul>

            <form className="d-flex w-50 justify-content-end" role="search">
              <input
                className="form-control me-2 border-warning"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={searchInputStyle}
              />
              <button className="btn btn-outline-warning" type="submit" style={buttonStyle}>
                <b>Search</b>
              </button>
            </form>

            <ul className="navbar-nav w-50 d-flex justify-content-evenly">
              <li className="nav-item" style={navItemStyle}>
                <button className="nav-link text-light" onClick={() => { /* Handle click here */ }}>
                  Add to Cart
                </button>
              </li>
              <li className="nav-item" style={navItemStyle}>
                <button className="nav-link text-light" onClick={() => { /* Handle click here */ }}>
                  Menu
                </button>
              </li>
              <li className="nav-item" style={navItemStyle}>
                <button className="nav-link text-light" onClick={() => { /* Handle click here */ }}>
                  Help
                </button>
              </li>
              <li className="nav-item" style={navItemStyle}>
                <button className="nav-link text-light" onClick={() => { /* Handle click here */ }}>
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="prod">
        <div>
          <h3 style={{ color: "maroon" }}>Product Categories</h3>

          {categoriesLoading ? ( 
            <>
            <img src={RT} alt='Loading'></img>
            <div>Loading Categories...</div>
            </>
          ) : (
            <ul style={{ paddingTop: "25px" }}>
              <Catogeries categories={categories} setcatname={setcatname} />
            </ul>
          )}
        </div>

        <div>
          <h1 style={{ color: "maroon", textAlign: "center", paddingRight: "200px" }}>Tanish Products</h1>

          {productsLoading ? (  
            <>
            <img src={RT} alt='Loading'></img>
            <div>Loading Categories...</div>
            </>
          ) : (
            <Product products={products} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
