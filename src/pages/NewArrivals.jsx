import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, X, ArrowUpDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './NewArrivals.css';

export default function NewArrivals() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Pre-filter products for new arrivals section
  const newArrivalProducts = useMemo(() => {
    return products.filter((p) => p.section === 'new-arrivals');
  }, []);

  // Extract categories dynamically from new arrivals
  const categories = useMemo(() => {
    const allCats = newArrivalProducts.flatMap((p) => p.category.split(', '));
    return Array.from(new Set(allCats)).sort();
  }, [newArrivalProducts]);

  const handleCategoryChange = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSearchTerm('');
    setSortBy('default');
  };

  // Filter and Sort Products
  const filteredProducts = useMemo(() => {
    let result = [...newArrivalProducts];

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

    // Category filter (Matches if product contains ANY of the selected categories)
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
  }, [newArrivalProducts, searchTerm, selectedCategories, sortBy]);

  return (
    <div className="new-arrivals-page">
      {/* Page Header Banner */}
      <div className="new-arrivals-hero-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">HOME</Link>
            <span>/</span>
            <span>NEW ARRIVALS</span>
          </div>
          <h1 className="new-arrivals-hero-title">NEW ARRIVALS</h1>
          <p className="new-arrivals-hero-subtitle">
            Browse our freshest fashion arrivals and newly launched clothing.
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
              <h4 className="filter-title">Search New Arrivals</h4>
              <div className="search-input-wrapper">
                <Search size={18} className="search-icon-inside" />
                <input
                  type="text"
                  placeholder="Search new arrivals..."
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

            <div className="filter-section category-filter-box">
              <div className="filter-header-row">
                <h4 className="filter-title">Categories</h4>
                {(selectedCategories.length > 0 || searchTerm) && (
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

            {selectedCategories.length > 0 && (
              <div className="filter-section active-tags-section">
                <h5 className="active-filters-heading">Active Filters</h5>
                <div className="active-tags-container">
                  {selectedCategories.map((cat) => (
                    <span key={cat} className="active-filter-tag">
                      {cat}
                      <button
                        type="button"
                        onClick={() => handleCategoryChange(cat)}
                        className="remove-tag-btn"
                      >
                        <X size={10} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
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
                      placeholder="Search new arrivals..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="filter-search-input"
                    />
                  </div>
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
                <strong>{newArrivalProducts.length}</strong> new arrivals
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
                <h3>No New Arrivals Found</h3>
                <p>
                  We couldn't find any products matching your search criteria in our new arrivals catalog.
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
