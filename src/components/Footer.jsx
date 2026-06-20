import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 */}
          <div className="footer-col">
            <h4 className="footer-title">Company Info</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#latest-posts">Latest Posts</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/products">Shop</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4 className="footer-title">Help Links</h4>
            <ul className="footer-links">
              <li><a href="#tracking">Tracking</a></li>
              <li><a href="#order-status">Order Status</a></li>
              <li><a href="#delivery">Delivery</a></li>
              <li><a href="#shipping-info">Shipping Info</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4 className="footer-title">Useful Links</h4>
            <ul className="footer-links">
              <li><a href="#special-offers">Special Offers</a></li>
              <li><a href="#gift-cards">Gift Cards</a></li>
              <li><a href="#advertising">Advertising</a></li>
              <li><a href="#terms-of-use">Terms of Use</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-title">Get In The Know</h4>
            {isSubmitted ? (
              <p className="newsletter-success">Thank you for subscribing!</p>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="newsletter-input-wrapper">
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>© 2020 NorthStar eCommerce</span>
            <div className="footer-legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms & Conditions</a>
            </div>
          </div>
          
          <div className="footer-payments">
            <img src="/payment_visa.png" alt="Visa" className="payment-icon-img" />
            <img src="/payment_mastercard.png" alt="MasterCard" className="payment-icon-img" />
            <img src="/payment_paypal.png" alt="PayPal" className="payment-icon-img" />
            <img src="/payment_visa_electron.png" alt="Visa Electron" className="payment-icon-img" />
          </div>
        </div>
      </div>
    </footer>
  );
}
