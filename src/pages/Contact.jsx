import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const contactBanner = 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&auto=format&fit=crop&q=80';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Banner */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${contactBanner})` }}
      >
        <div className="container">
          <h1 className="contact-hero-title">CONTACT US</h1>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="section contact-section">
        <div className="container contact-container">
          {/* Left Column - Contact Form */}
          <div className="contact-form-column">
            {isSent ? (
              <div className="contact-success-container">
                <p className="contact-success-text">Message sent. We'll contact you soon.</p>
                <button
                  type="button"
                  className="btn btn-primary contact-back-btn"
                  onClick={() => setIsSent(false)}
                >
                  GO BACK
                </button>
              </div>
            ) : (
              <>
                <h2 className="contact-section-title">We would love to hear from you.</h2>
                <p className="contact-section-desc">
                  If you have any query or any type of suggestion, you can contact us. We would love to hear from you.
                </p>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message <span>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Type your message here..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-send-message">
                    SEND MESSAGE
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right Column - Contact Info */}
          <div className="contact-info-column">
            {/* Info Block 1 */}
            <div className="info-block">
              <div className="info-icon-wrapper">
                <MapPin size={24} />
              </div>
              <div className="info-content">
                <h3 className="info-title">Visit Us</h3>
                <p className="info-detail">Delhi, India</p>
                <p className="info-subdetail">
                  <Phone size={14} className="sub-icon" /> Phone: 8250588330
                </p>
              </div>
            </div>

            {/* Info Block 2 */}
            <div className="info-block">
              <div className="info-icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="info-content">
                <h3 className="info-title">Get In Touch</h3>
                <p className="info-detail">You can get in touch with us on this provided email.</p>
                <p className="info-subdetail mail-link">
                  Email: <a href="mailto:hemant110501@gmail.com">hemant110501@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
