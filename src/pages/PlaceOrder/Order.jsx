import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { formatPrice, products } from "../../utils/Product.js";
import "./Order.css";

const initialForm = {
  name: "",
  email: "",
  productId: "",
  quantity: "1",
};

function Order() {
  const location = useLocation();
  const preselectedId = location.state?.productId;

  const [form, setForm] = useState({
    ...initialForm,
    productId: preselectedId ? String(preselectedId) : "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const selectedProduct = products.find(
    (product) => product.id === Number(form.productId)
  );
  const quantity = Number(form.quantity);
  const total = selectedProduct ? selectedProduct.price * quantity : 0;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!selectedProduct) {
      nextErrors.productId = "Please choose a fragrance.";
    } else if (!selectedProduct.available) {
      nextErrors.productId = "This fragrance is currently out of stock.";
    }

    if (!form.quantity || quantity < 1) {
      nextErrors.quantity = "Quantity must be at least 1.";
    } else if (!Number.isInteger(quantity)) {
      nextErrors.quantity = "Enter a whole number.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitted(true);
    window.alert(
      `Order summary\n\nCustomer: ${form.name.trim()}\nEmail: ${form.email.trim()}\nFragrance: ${selectedProduct.name}\nQuantity: ${quantity}\nTotal: ${formatPrice(total)}\n\nThank you for choosing A-Perfum!`
    );
  };

  return (
    <section className="order-page content-width">
      <div className="page-intro order-intro">
        <span className="eyebrow">Your A-Perfum order</span>
        <h1>
          Choose your <em>scent.</em>
        </h1>
        <p>Tell us which fragrance you’d like, and we’ll prepare your order.</p>
      </div>

      <div className="order-layout">
        <form className="order-form" onSubmit={handleSubmit} noValidate>
          <label className="field-label" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Alex Morgan"
            autoComplete="name"
          />
          {errors.name && <span className="field-error">{errors.name}</span>}

          <label className="field-label" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
          />
          {errors.email && <span className="field-error">{errors.email}</span>}

          <label className="field-label" htmlFor="productId">
            Choose a fragrance
          </label>
          <select
            id="productId"
            name="productId"
            value={form.productId}
            onChange={handleChange}
          >
            <option value="">Select a fragrance</option>
            {products.map((product) => (
              <option
                key={product.id}
                value={product.id}
                disabled={!product.available}
              >
                {product.name} · {formatPrice(product.price)}
                {product.available ? "" : " (out of stock)"}
              </option>
            ))}
          </select>
          {errors.productId && (
            <span className="field-error">{errors.productId}</span>
          )}

          <label className="field-label" htmlFor="quantity">
            Number of bottles
          </label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            step="1"
            value={form.quantity}
            onChange={handleChange}
          />
          {errors.quantity && (
            <span className="field-error">{errors.quantity}</span>
          )}

          <div className="order-total">
            <span>Estimated total</span>
            <strong>{formatPrice(total)}</strong>
          </div>

          <button className="submit-order" type="submit">
            Place fragrance order <span>↗</span>
          </button>

          {submitted && (
            <p className="success-message">
              Your order details are ready. We’ll be in touch soon.
            </p>
          )}

          <p className="form-note">No payment is collected on this demo form.</p>
        </form>

        <aside className="order-aside">
          <span className="aside-mark">✳</span>
          <span className="eyebrow">Still exploring?</span>
          <h2>
            Find a scent
            <br />
            you’ll <em>love.</em>
          </h2>
          <p>
            Browse the A-Perfum collection and discover a fragrance for your
            style, mood, and everyday moments.
          </p>
          <Link className="underlined-link" to="/products">
            Explore all fragrances <span>↗</span>
          </Link>
          <div className="aside-footnote">
            A-Perfum · Discover your signature scent
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Order;