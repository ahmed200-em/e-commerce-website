import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="footer-brand" to="/">
            A-Perfum<span>✳</span>
          </Link>
          <p>Find the fragrance that feels like you.</p>
        </div>

        <div className="footer-links">
          <Link to="/products">Shop perfumes</Link>
          <Link to="/about">Our story</Link>
          <Link to="/order">Place an order</Link>
        </div>

        <div className="footer-contact">
          <span>Need a hand?</span>
          <a href="mailto:hello@a-perfum.example">
            hello@a-perfum.example
          </a>
          <span>Customer care · Mon–Sat · 9am–6pm</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} A-Perfum</span>
        <span>Discover your scent. Make it memorable.</span>
      </div>
    </footer>
  );
}

export default Footer;