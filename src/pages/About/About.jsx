import React from "react";
import { Link } from "react-router-dom";
import AboutImage from "../../assets/img/A-PERFUM-about.png";
import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-hero content-width">
        <div className="page-intro">
          <span className="eyebrow">A little about us</span>
          <h1>
            Fragrance,
            <br />
            <em>with intention.</em>
          </h1>
          <p>
            A-Perfum is a fragrance shop for scents that make a moment
            memorable. Explore our collection and find one that feels like you.
          </p>
          <Link className="button-primary" to="/products">
            Find your scent <span>↗</span>
          </Link>
        </div>

        <div className="about-image">
          <img
            src={AboutImage}
            alt="Perfume bottle styled in warm, soft light"
          />
        </div>
      </div>

      <div className="about-principles">
        <div className="content-width principles-inner">
          <span className="eyebrow">What guides us</span>
          <div className="principle-grid">
            <article>
              <span>01</span>
              <h2>A scent that feels personal.</h2>
              <p>
                Fragrance is part of how you express yourself. We help you
                explore scents for your style, mood, and everyday rituals.
              </p>
            </article>

            <article>
              <span>02</span>
              <h2>Every note matters.</h2>
              <p>
                From the first impression to the lasting finish, a memorable
                fragrance is all about how its notes come together.
              </p>
            </article>

            <article>
              <span>03</span>
              <h2>Choose with care.</h2>
              <p>
                Our collection brings together distinctive fragrances, each
                selected to offer its own character and feeling.
              </p>
            </article>
          </div>
        </div>
      </div>

      <div className="about-end content-width">
        <span className="eyebrow">Come discover</span>
        <h2>
          Find the scent
          <br />
          <em>that stays with you.</em>
        </h2>
        <Link className="underlined-link" to="/products">
          Explore the collection <span>↗</span>
        </Link>
      </div>
    </section>
  );
}

export default About;