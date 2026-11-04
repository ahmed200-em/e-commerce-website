import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import "./App.css";
import Footer from "./layouts/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </main>
      <Footer />
    </>
  );
}

export default App;
