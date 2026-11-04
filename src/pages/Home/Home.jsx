import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard.jsx";
import { products } from "../../utils/Product.js";
import heroImage from "../../assets/img/A-PERFUM-hero.webp";

import "./Home.css";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-star">✳</span> Find a scent that feels like you
          </span>
          <h1>
            Fragrance for
            <br />
            <em>every moment.</em>
          </h1>
          <p>
            Discover perfumes chosen to inspire, comfort, and leave a lasting
            impression. Find your next signature scent at Prefum.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" to="/products">
              Explore our perfumes <span>↗</span>
            </Link>
            <Link className="hero-secondary" to="/about">
              Get to know Prefum
            </Link>
          </div>
          <div className="hero-note">
            <span>✳</span> Your scent. Your story.
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={heroImage}
            alt="Elegant perfume bottle in warm, soft light"
          />
          <div className="hero-sticker">
            <span>Find your</span>
            <strong>signature scent</strong>
            <span className="sticker-star">✳</span>
          </div>
          <span className="image-caption">THE FRAGRANCE EDIT · 01 / 04</span>
        </div>
      </section>

      <section className="home-values">
        <span>Curated fragrances</span>
        <span>✳</span>
        <span>Scents for every occasion</span>
        <span>✳</span>
        <span>Make it memorable</span>
      </section>

      <section className="featured-section content-width">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A few scents to love</span>
            <h2>
              Meet your new <em>favorites.</em>
            </h2>
          </div>
          <Link className="underlined-link" to="/products">
            Shop all perfumes <span>↗</span>
          </Link>
        </div>
        <div className="product-grid home-product-grid">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="home-story">
        <div className="story-mark">✳</div>
        <div>
          <span className="eyebrow">The Prefum feeling</span>
          <h2>
            Wear your <em>mood.</em>
          </h2>
          <p>
            A fragrance can bring back a memory, set the tone for a moment, or
            become part of your everyday ritual. At Prefum, we help you discover
            scents that feel personal and stay with you.
          </p>
          <Link className="underlined-link" to="/about">
            A little about Prefum <span>↗</span>
          </Link>
        </div>
        <div className="story-number">
          Nº
          <br />
          <strong>01</strong>
        </div>
      </section>
    </>
  );
}

export default Home;