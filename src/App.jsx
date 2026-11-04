import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Store/Store.jsx"
import About from "./pages/About/About.jsx";
import Footer from "./layouts/Footer.jsx";
import Order from "./pages/PlaceOrder/Order.jsx"
import NotFound from "./pages/Error/Error.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
