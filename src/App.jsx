import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/Error/Error.jsx"
import "./App.css";
import Footer from "./layouts/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
