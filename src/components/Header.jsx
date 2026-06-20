import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Header.css';

export default function Header() {
  const { getCartCount } = useCart();
  const { currentUser } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          NorthStar
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link to="/" className={`nav-link ${isActive('/')}`}>
            HOME
          </Link>
          <Link to="/products" className={`nav-link ${isActive('/products')}`}>
            ALL PRODUCTS
          </Link>
          <Link to="/season-sale" className={`nav-link ${isActive('/season-sale')}`} style={{ color: '#D32F2F', fontWeight: '700' }}>
            SEASON SALE
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>
            ABOUT
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
            CONTACT US
          </Link>
        </nav>

        {/* Utilities */}
        <div className="header-utilities">
          <Link 
            to={currentUser ? "/profile" : "/login"} 
            className="utility-icon profile-utility-link" 
            title={currentUser ? "Profile" : "Login / Signup"}
          >
            <User size={20} />
            {currentUser && <span className="header-username">{currentUser.username.split(' ')[0]}</span>}
          </Link>
          <Link to="/cart" className="utility-icon cart-icon-wrapper" title="Shopping Cart">
            <ShoppingBag size={20} />
            {getCartCount() > 0 && (
              <span className="cart-badge">{getCartCount()}</span>
            )}
          </Link>
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}>
        <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="drawer-header">
            <span className="logo">NorthStar</span>
            <button className="close-btn" onClick={closeMobileMenu}>
              <X size={24} />
            </button>
          </div>
          <nav className="mobile-nav-links">
            <Link to="/" className={`mobile-nav-link ${isActive('/')}`} onClick={closeMobileMenu}>
              HOME
            </Link>
            <Link to="/products" className={`mobile-nav-link ${isActive('/products')}`} onClick={closeMobileMenu}>
              ALL PRODUCTS
            </Link>
            <Link to="/season-sale" className={`mobile-nav-link ${isActive('/season-sale')}`} onClick={closeMobileMenu} style={{ color: '#D32F2F', fontWeight: '700' }}>
              SEASON SALE
            </Link>
            <Link to="/about" className={`mobile-nav-link ${isActive('/about')}`} onClick={closeMobileMenu}>
              ABOUT
            </Link>
            <Link to="/contact" className={`mobile-nav-link ${isActive('/contact')}`} onClick={closeMobileMenu}>
              CONTACT US
            </Link>
            <Link 
              to={currentUser ? "/profile" : "/login"} 
              className={`mobile-nav-link ${isActive(currentUser ? '/profile' : '/login')}`} 
              onClick={closeMobileMenu}
            >
              {currentUser ? "MY PROFILE" : "LOGIN / SIGNUP"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
