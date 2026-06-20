import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, X, ArrowUpDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './SeasonSale.css';

export default function SeasonSale() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [selectedOffer, setSelectedOffer] = useState('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Pre-filter products for sale section
  const saleProducts = useMemo(() => {
    return products.filter((p) => p.section === 'sale');
  }, []);

  // Extract categories dynamically from sale items
  const categories = useMemo(() => {
    const allCats = saleProducts.flatMap((p) => p.category.split(', '));
    return Array.from(new Set(allCats)).filter(cat => cat !== 'Sale' && cat !== 'Outlet').sort();
  }, [saleProducts]);

  const handleCategoryChange = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSearchTerm('');
    setSortBy('default');
    setSelectedOffer('all');
  };

  // Filter and Sort Products
  const filteredProducts = useMemo(() => {
    let result = [...saleProducts];

    // Filter by Specific Offer (e.g. 50% OFF, Buy 2 Get 1 Free)
    if (selectedOffer !== 'all') {
      result = result.filter((p) => p.offer === selectedOffer);
    }

    // Search term filter
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term) ||
          p.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => {
        const prodCats = p.category.split(', ');
        return selectedCategories.some((cat) => prodCats.includes(cat));
      });
    }

    // Sorting logic
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'reviews') {
      result.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    return result;
  }, [saleProducts, searchTerm, selectedCategories, selectedOffer, sortBy]);

  return (
    <div className="season-sale-page">
      {/* Page Header Banner */}
      <div className="season-sale-hero-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">HOME</Link>
            <span>/</span>
            <span>SEASON SALE</span>
          </div>
          <h1 className="season-sale-hero-title">SEASON SALE</h1>
          <p className="season-sale-hero-subtitle">
            Get huge discounts and special promotions on your favorite items. Buy 2 Get 1 Free, Buy 1 Get 1 Free, and 50% OFF!
          </p>
        </div>
      </div>

      <div className="container products-section-container">
        {/* Mobile Filter Toggle */}
        <div className="mobile-toolbar">
          <button
            type="button"
            className="btn btn-outline mobile-filter-toggle-btn"
            onClick={() => setShowMobileFilters(true)}
          >
            <SlidersHorizontal size={16} style={{ marginRight: '8px' }} />
            FILTERS {selectedCategories.length > 0 && `(${selectedCategories.length})`}
          </button>
          <div className="sort-wrapper-mobile">
            <ArrowUpDown size={14} className="sort-icon-muted" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select-input"
            >
              <option value="default">Default Sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Average Rating</option>
              <option value="reviews">Popularity</option>
            </select>
          </div>
        </div>

        <div className="products-layout-grid">
          {/* Desktop Filter Sidebar */}
          <aside className="filters-sidebar">
            <div className="filter-section search-filter-box">
              <h4 className="filter-title">Search Sale Items</h4>
              <div className="search-input-wrapper">
                <Search size={18} className="search-icon-inside" />
                <input
                  type="text"
                  placeholder="Search offers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="filter-search-input"
                />
                {searchTerm && (
                  <button
                    type="button"
                    className="search-clear-btn"
                    onClick={() => setSearchTerm('')}
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Offer Type Filter */}
            <div className="filter-section offer-filter-box">
              <h4 className="filter-title">Promotion Type</h4>
              <div className="offer-selector-list">
                <button
                  type="button"
                  className={`offer-filter-btn ${selectedOffer === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedOffer('all')}
                >
                  All Offers
                </button>
                <button
                  type="button"
                  className={`offer-filter-btn ${selectedOffer === 'Buy 2 Get 1 Free' ? 'active' : ''}`}
                  onClick={() => setSelectedOffer('Buy 2 Get 1 Free')}
                >
                  Buy 2 Get 1 Free
                </button>
                <button
                  type="button"
                  className={`offer-filter-btn ${selectedOffer === 'Buy 1 Get 1 Free' ? 'active' : ''}`}
                  onClick={() => setSelectedOffer('Buy 1 Get 1 Free')}
                >
                  Buy 1 Get 1 Free
                </button>
                <button
                  type="button"
                  className={`offer-filter-btn ${selectedOffer === '50% OFF' ? 'active' : ''}`}
                  onClick={() => setSelectedOffer('50% OFF')}
                >
                  50% OFF
                </button>
                <button
                  type="button"
                  className={`offer-filter-btn ${selectedOffer === '40% OFF' ? 'active' : ''}`}
                  onClick={() => setSelectedOffer('40% OFF')}
                >
                  40% OFF
                </button>
                <button
                  type="button"
                  className={`offer-filter-btn ${selectedOffer === '30% OFF' ? 'active' : ''}`}
                  onClick={() => setSelectedOffer('30% OFF')}
                >
                  30% OFF
                </button>
              </div>
            </div>

            <div className="filter-section category-filter-box">
              <div className="filter-header-row">
                <h4 className="filter-title">Categories</h4>
                {(selectedCategories.length > 0 || searchTerm || selectedOffer !== 'all') && (
                  <button
                    type="button"
                    className="clear-all-text-btn"
                    onClick={handleClearFilters}
                  >
                    Clear All
                  </button>
                )}
              </div>
              <div className="categories-list-scrollable">
                {categories.map((cat) => (
                  <label key={cat} className="category-checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                      className="category-checkbox"
                    />
                    <span className="checkbox-custom-box"></span>
                    <span className="category-name-text">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile Filters Sidebar Drawer */}
          <div className={`mobile-filters-drawer ${showMobileFilters ? 'open' : ''}`}>
            <div className="drawer-overlay" onClick={() => setShowMobileFilters(false)}></div>
            <div className="drawer-content">
              <div className="drawer-header">
                <h3>Filters</h3>
                <button
                  type="button"
                  className="close-drawer-btn"
                  onClick={() => setShowMobileFilters(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="drawer-body">
                <div className="filter-section">
                  <h4 className="filter-title">Search</h4>
                  <div className="search-input-wrapper">
                    <Search size={18} className="search-icon-inside" />
                    <input
                      type="text"
                      placeholder="Search offers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="filter-search-input"
                    />
                  </div>
                </div>

                <div className="filter-section">
                  <h4 className="filter-title">Promotion Type</h4>
                  <select
                    value={selectedOffer}
                    onChange={(e) => setSelectedOffer(e.target.value)}
                    className="sort-select-input"
                    style={{ width: '100%', marginTop: '8px' }}
                  >
                    <option value="all">All Offers</option>
                    <option value="Buy 2 Get 1 Free">Buy 2 Get 1 Free</option>
                    <option value="Buy 1 Get 1 Free">Buy 1 Get 1 Free</option>
                    <option value="50% OFF">50% OFF</option>
                    <option value="40% OFF">40% OFF</option>
                    <option value="30% OFF">30% OFF</option>
                  </select>
                </div>

                <div className="filter-section">
                  <h4 className="filter-title">Categories</h4>
                  <div className="categories-list-scrollable">
                    {categories.map((cat) => (
                      <label key={cat} className="category-checkbox-label">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => handleCategoryChange(cat)}
                          className="category-checkbox"
                        />
                        <span className="checkbox-custom-box"></span>
                        <span className="category-name-text">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="drawer-footer">
                <button
                  type="button"
                  className="btn btn-outline btn-block"
                  onClick={handleClearFilters}
                >
                  Clear Filters
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={() => setShowMobileFilters(false)}
                >
                  Show {filteredProducts.length} Items
                </button>
              </div>
            </div>
          </div>

          {/* Products List Panel */}
          <main className="products-list-panel">
            <div className="desktop-toolbar">
              <span className="results-count">
                Showing <strong>{filteredProducts.length}</strong> of{' '}
                <strong>{saleProducts.length}</strong> discount items
              </span>
              <div className="sort-wrapper-desktop">
                <span className="sort-label">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select-input"
                >
                  <option value="default">Default Sorting</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Average Rating</option>
                  <option value="reviews">Popularity (Reviews)</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="no-products-found">
                <h3>No Discounted Products Found</h3>
                <p>
                  We couldn't find any products matching your search criteria in our Season Sale catalog.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClearFilters}
                  style={{ marginTop: '16px' }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
