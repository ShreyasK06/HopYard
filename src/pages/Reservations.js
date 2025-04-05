import React, { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaCalendarAlt, FaUsers, FaUtensils } from 'react-icons/fa';
import '../styles/Contact.css';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation submission logic here
    console.log('Reservation submitted:', formData);
  };

  // Generate time options for the dropdown
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 11; hour <= 22; hour++) {
      for (let minute of ['00', '30']) {
        const timeString = `${hour > 12 ? hour - 12 : hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;
        times.push(timeString);
      }
    }
    return times;
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Make a <span>Reservation</span></h1>
          <p>Book your table at The HopYard Sports Pub</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <div className="section-header">
            <h2>Visit Us</h2>
            <div className="section-divider"></div>
          </div>

          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>360 W Main St</p>
                <p>Middletown, PA 17057</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-content">
                <h3>Hours</h3>
                <p>Mon-Fri: 11am - 2am</p>
                <p>Sat-Sun: 10am - 2am</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>Phone: (555) 123-4567</p>
                <p>For reservations: (555) 123-4568</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>info@hopyard.com</p>
                <p>reservations@hopyard.com</p>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.8243094905!2d-76.7324!3d40.1997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8c1052532535d%3A0x7c3f9b66b3298a23!2s360%20W%20Main%20St%2C%20Middletown%2C%20PA%2017057!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="The HopYard Sports Pub Location"
            ></iframe>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="section-header">
            <h2>Book a Table</h2>
            <div className="section-divider"></div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a time</option>
                  {generateTimeOptions().map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservations; 