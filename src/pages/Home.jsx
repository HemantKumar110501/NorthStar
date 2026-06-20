import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

import { products, heroBanner, promoBanners } from '../data/products';
import { resolveAsset } from '../utils/resolveAsset';
import './Home.css';

export default function Home() {
  const newArrivals = products.filter((p) => p.section === 'new-arrivals').slice(0, 8);
  const topSellerProducts = products.filter((p) => p.section === 'top-sellers').slice(0, 8);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url(${heroBanner.image})` }}
      >
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              STYLIST PICKS BEAT<br />THE HEAT
            </h1>
            <Link to="/products" className="btn btn-primary hero-cta">
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>

      {/* 1. Discover New Arrivals Section (8 Products) */}
      <section className="section products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-main-title">Discover NEW Arrivals</h2>
            <p className="section-sub-title">Recently added shirts!</p>
          </div>
          <div className="products-grid new-arrivals-grid">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-cta-wrapper" style={{ marginTop: '30px' }}>
            <Link to="/new-arrivals" className="btn btn-primary">
              VIEW ALL
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Store Features Banner (4 Columns) */}
      <section className="features-banner">
        <div className="container features-container">
          <div className="feature-item">
            <div className="feature-icon">
              <img src={resolveAsset('/shipping_icon.png')} alt="Free Shipping" className="feature-icon-img" />
            </div>
            <div className="feature-info">
              <h5 className="feature-title">FREE SHIPPING</h5>
              <p className="feature-desc">Enjoy free shipping on all orders above ₹1000</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <img src={resolveAsset('/support_icon.png')} alt="Support 24/7" className="feature-icon-img" />
            </div>
            <div className="feature-info">
              <h5 className="feature-title">SUPPORT 24/7</h5>
              <p className="feature-desc">Our support team is there to help you for queries</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <img src={resolveAsset('/return_icon.png')} alt="30 Days Return" className="feature-icon-img" />
            </div>
            <div className="feature-info">
              <h5 className="feature-title">30 DAYS RETURN</h5>
              <p className="feature-desc">Simply return it within 30 days for an exchange.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <img src={resolveAsset('/security_icon.png')} alt="100% Payment Secure" className="feature-icon-img" />
            </div>
            <div className="feature-info">
              <h5 className="feature-title">100% PAYMENT SECURE</h5>
              <p className="feature-desc">Our payments are secured with 256 bit encryption</p>
            </div>
          </div>
        </div>
      </section>



      {/* 4. Promotional Banners (Peace of Mind & Buy 2 Get 1 Free, Solid Black Cards) */}
      <section className="section promo-section">
        <div className="container">
          <div className="promo-grid">
            {/* Left Card: Peace of Mind */}
            <div className="promo-card black-promo-card">
              <div className="promo-content">
                <h3 className="promo-title">{promoBanners.left.title}</h3>
                <p className="promo-subtitle">{promoBanners.left.subtitle}</p>
                <Link to="/products" className="btn btn-outline-white">
                  {promoBanners.left.buttonText}
                </Link>
              </div>
            </div>

            {/* Right Card: Buy 2 Get 1 Free */}
            <div className="promo-card black-promo-card">
              <div className="promo-content">
                <h3 className="promo-title">{promoBanners.right.title}</h3>
                <p className="promo-subtitle">{promoBanners.right.subtitle}</p>
                <Link to="/season-sale" className="btn btn-outline-white">
                  {promoBanners.right.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Top Sellers Section (grid) */}
      <section className="section products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-main-title">Top Sellers</h2>
            <p className="section-sub-title">Best‑selling items curated for you.</p>
          </div>
          <div className="products-grid top-sellers-grid">
            {topSellerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-cta-wrapper" style={{ marginTop: '20px' }}>
            <Link to="/top-sellers" className="btn btn-primary">Shop Now</Link>
          </div>

        </div>
      </section>


    </div>
  );
}
