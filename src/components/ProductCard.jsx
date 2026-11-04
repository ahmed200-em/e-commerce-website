import React from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/Product.js";
import "./ProductCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { name, price, category, image, available, quantity, description } = product;

  const showDetails = () =>
    window.alert(
      `${name}\n${category} · ${formatPrice(price)}\n${quantity}\n\n${description}\n\n${available ? "In stock" : "Currently out of stock"}`,
    );
  const buyNow = (selectedProduct) =>
    navigate("/order", { state: { productId: selectedProduct.id } });

  return (
    <article className="product-card">
      <button
        className="product-image-button"
        onClick={showDetails}
        aria-label={`View details for ${name}`}
      >
        <img src={image} alt={name} loading="lazy" />
        <span className={`availability ${available ? "in-stock" : "sold-out"}`}>
          {available ? "In stock" : "Sold out"}
        </span>
      </button>
      <div className="product-info">
        <div>
          <span className="product-category">{category}</span>
          <h3>{name}</h3>
        </div>
        <span className="product-price">{formatPrice(price)}</span>
      </div>
      <div className="product-actions">
        <button className="text-button" onClick={showDetails}>
          View details <span>↗</span>
        </button>
        <button
          className="buy-button"
          disabled={!available}
          onClick={() => buyNow(product)}
        >
          {available ? "Buy now" : "Unavailable"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
