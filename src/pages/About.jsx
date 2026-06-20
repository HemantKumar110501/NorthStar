import { Link } from 'react-router-dom';
import { founders, testimonials } from '../data/products';
import { resolveAsset } from '../utils/resolveAsset';

import './About.css';

export default function About() {
  const introBanner = resolveAsset('/about_banner.png');
  const promoLeftImage = resolveAsset('/about_woman.png');
  const promoRightImage = resolveAsset('/about_man.png');

  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section 
        className="about-hero" 
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${introBanner})` }}
      >
        <div className="container">
          <h1 className="about-hero-title">ABOUT NORTHSTAR</h1>
        </div>
      </section>

      {/* Two Promotional Cards side-by-side */}
      <section className="section about-promo-section">
        <div className="container">
          <div className="about-promo-grid">
            {/* Left Card: Woman */}
            <div 
              className="about-promo-card" 
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${promoLeftImage})` }}
            >
              <Link to="/products" className="btn btn-outline-white about-promo-btn">
                BUY NOW
              </Link>
            </div>

            {/* Right Card: Man */}
            <div 
              className="about-promo-card" 
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${promoRightImage})` }}
            >
              <Link to="/products" className="btn btn-outline-white about-promo-btn">
                BUY NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section founders-section">
        <div className="container">
          <h2 className="section-title text-center">The Founders</h2>
          <div className="founders-grid">
            {founders.map((founder, index) => (
              <div key={index} className="founder-card">
                <div className="founder-image-container">
                  <img src={founder.image} alt={founder.name} className="founder-image" />
                </div>
                <h4 className="founder-name">{founder.name}</h4>
                <p className="founder-title">{founder.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title text-center">Testimonials</h2>
          <div className="testimonials-stack">
            {testimonials.map((t, index) => (
              <div key={index} className="about-testimonial-card">
                <img src={t.image} alt={t.name} className="about-testimonial-avatar" />
                <div className="about-testimonial-content">
                  <span className="about-testimonial-quote-icon">“</span>
                  <div className="about-testimonial-text-wrapper">
                    <p className="about-testimonial-quote">{t.quote}</p>
                    <h5 className="about-testimonial-name">{t.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
