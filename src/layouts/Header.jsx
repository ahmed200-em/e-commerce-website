import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "Shop" },
  { to: "/about", label: "Our story" },
];

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Northstar Market home">
        <span className="brand-mark">
          A
        </span>
        <span>
          A-Perfum<span className="brand-light"> market</span>
        </span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end}>
            {label}
          </NavLink>
        ))}
      </nav>
      <Link className="header-order" to="/order">
        Order online <span>↗</span>
      </Link>
    </header>
  );
}

export default Header;
