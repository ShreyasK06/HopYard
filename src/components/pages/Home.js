import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span>Hop Yard</span></h1>
          <p>Sports Pub & Restaurant in Middletown, PA</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">View Our Menu</Link>
            <Link to="/reservations" className="btn btn-secondary">Make a Reservation</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🍺</div>
              <h3>Great Drinks</h3>
              <p>Enjoy our selection of domestic and craft beers on tap, along with a full bar featuring signature cocktails and daily drink specials.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍔</div>
              <h3>Delicious Food</h3>
              <p>From our famous wings and burgers to hearty entrees, we serve quality pub fare that satisfies every craving. Don't miss our daily food specials!</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📺</div>
              <h3>Sports Entertainment</h3>
              <p>Watch all your favorite games on our multiple TVs throughout the bar. We're your destination for NFL Sunday Ticket, MLB, NHL, and more!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Us Today</h2>
            <p>Experience the best sports pub atmosphere in Middletown</p>
            <Link to="/reservations" className="btn btn-primary">Reserve a Table</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 