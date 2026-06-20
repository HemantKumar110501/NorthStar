import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingCart, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [showToast, setShowToast] = useState(false);

  // Find product by id using memo
  const product = useMemo(() => products.find((p) => p.id === id) || null, [id]);

  // Reset quantity when product changes


  if (!product) {
    return (
      <div className="container product-not-found section text-center">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist or has been removed.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '24px' }}>
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (val) => {
    const newQty = quantity + val;
    if (newQty >= 1) {
      setQuantity(newQty);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  // Breadcrumbs text split helper
  const breadcrumbCategory = product.category.split(', ');

  return (
    <div className="product-details-page">
      {/* Toast Notification */}
      {showToast && (
        <div className="toast-container">
          <div className="toast">
            <Check size={18} />
            <span>Added to Cart Successfully!</span>
          </div>
        </div>
      )}

      <div className="container">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link to="/">HOME</Link>
          <span>/</span>
          <Link to="/">{breadcrumbCategory[0] || 'SHOP'}</Link>
          <span>/</span>
          <Link to="/">{breadcrumbCategory[1] || 'SHIRTS'}</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        {/* Details Section */}
        <div className="details-container">
          {/* Left: Image Showcase */}
          <div className="details-image-showcase">
            <img src={product.image} alt={product.name} className="main-detail-image" />
          </div>

          {/* Right: Detail Panel */}
          <div className="details-panel">
            <h1 className="details-title">{product.name}</h1>
            
            {/* Rating */}
            <div className="details-rating-row">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < product.rating ? 'var(--color-accent)' : 'none'} 
                    color="var(--color-accent)" 
                  />
                ))}
              </div>
              <a href="#reviews" className="details-reviews-link" onClick={() => setActiveTab('reviews')}>
                ({product.reviewsCount} customer reviews)
              </a>
            </div>

            {/* Pricing */}
            <div className="details-pricing">
              {product.originalPrice && (
                <span className="details-original-price">₹{product.originalPrice.toFixed(2)}</span>
              )}
              <span className="details-price">₹{product.price.toFixed(2)}</span>
            </div>

            {/* Description */}
            <p className="details-desc">{product.description}</p>

            {/* Sizing Picker */}
            <div className="details-size-picker">
              <span className="picker-label">Select Size</span>
              <div className="size-buttons">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="details-actions">
              <div className="quantity-selector">
                <button 
                  type="button" 
                  className="qty-btn" 
                  onClick={() => handleQuantityChange(-1)}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="qty-value">{quantity}</span>
                <button 
                  type="button" 
                  className="qty-btn" 
                  onClick={() => handleQuantityChange(1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button 
                type="button" 
                className="btn btn-primary btn-add-cart" 
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} style={{ marginRight: '8px' }} />
                ADD TO CART
              </button>
            </div>

            {/* Share Circles (mockup circles from Figma) */}
            <div className="details-share-circles">
              <span className="share-circle"></span>
              <span className="share-circle"></span>
              <span className="share-circle"></span>
              <span className="share-circle"></span>
            </div>

            {/* Meta Tags */}
            <div className="details-meta">
              <div className="meta-row">
                <span className="meta-label">Category:</span>
                <span className="meta-value">{product.category}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Tags:</span>
                <span className="meta-value">{product.tags.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Reviews Tabs */}
        <div className="tab-container" id="reviews">
          <div className="tab-headers">
            <button
              className={`tab-header ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`tab-header ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({product.reviewsCount})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' ? (
              <div className="description-content">
                <p style={{ marginBottom: '16px' }}>
                  {product.description} Built with meticulous attention to detail, this product represents 
                  the ultimate fusion of style and resilience. Featuring high-grade tailoring stitching, 
                  comfortable lining interfaces, and a modern contemporary drape profile.
                </p>
                <p>
                  Ideal for everyday casual wear, weekend outings, or layering up for smarter occasions. 
                  Comes pre-washed to prevent shrinkage and color bleeding, retaining its premium texture 
                  and wash density even after multiple washes.
                </p>
              </div>
            ) : (
              <div className="reviews-content">
                <div className="reviews-list">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="review-item">
                      <div className="review-header">
                        <span className="review-author">Customer {index + 1}</span>
                        <div className="review-stars">
                          {[...Array(5)].map((_, s) => (
                            <Star 
                              key={s} 
                              size={12} 
                              fill={s < 5 ? 'var(--color-accent)' : 'none'} 
                              color="var(--color-accent)" 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="review-comment">
                        Excellent fabric quality and fits perfectly! The material feels premium, soft on the 
                        skin, and exactly as described in the pictures. Highly recommended!
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
