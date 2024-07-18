import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductsDetails from "../pages/ProductsDetails";
import Service from "../pages/Service";
import {Projects }from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Institutional from '../pages/Institutional.jsx'
import Commercial from '../pages/Commercial.jsx'
import InfoTwoBed from '../pages/InfoTwoBed.jsx'
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />}></Route>
      <Route path="products/:id" element={<ProductsDetails />} />
      <Route path="/service" element={<Service />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/whoweare" element={<Contact />} />
      <Route path="/institutional" element={<Institutional />} />
      <Route path="/commercial" element={<Commercial />} />
      <Route path="/info200bed" element={<InfoTwoBed />} />
    </Routes>
  );
}

export default Routing;
