import React from "react";
import ProductCard from "../../components/ProductCard.jsx";
import { products } from "../../utils/Product.js";
import "./Store.css";

function Products() {
  return (
    <section className="products-page content-width">
      <div className="page-intro products-intro">
        <span className="eyebrow">A-Perfum · {products.length} fragrances</span>
        <h1>
          Find your
          <br />
          <em>signature scent.</em>
        </h1>
        <p>
          Explore distinctive fragrances chosen to match your style, mood, and
          everyday moments.
        </p>
      </div>

      <div className="products-toolbar">
        <span>
          All fragrances <strong>({products.length})</strong>
        </span>
        <span>
          Curated with care <span className="toolbar-star">✳</span>
        </span>
      </div>

      <div className="product-grid all-products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
