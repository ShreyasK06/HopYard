import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About The HopYard</h1>
        <p>Your neighborhood sports pub since 2010</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-text">
                <h2>Our Story</h2>
                <p>
                  The HopYard Sports Pub was founded with a simple mission: to create a welcoming space where
                  sports fans, families, and friends can come together to enjoy great food, drinks, and
                  company. Located in the heart of Middletown, PA, we've quickly become a local favorite
                  for watching the big game or enjoying a casual night out.
                </p>
                <p>
                  Our commitment to quality is evident in everything we do - from our carefully curated
                  selection of craft beers to our made-from-scratch pub fare. We believe in supporting
                  local breweries and using fresh, locally-sourced ingredients whenever possible.
                </p>
              </div>
              <div className="about-image">
                <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="The HopYard interior" />
              </div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Quality</h3>
                <p>We never compromise on the quality of our food and drinks. Every dish is prepared with care using the finest ingredients.</p>
              </div>
              <div className="value-card">
                <h3>Community</h3>
                <p>We're more than just a pub - we're a gathering place for the community, supporting local events and causes.</p>
              </div>
              <div className="value-card">
                <h3>Service</h3>
                <p>Our friendly staff is dedicated to providing exceptional service and ensuring every visit is memorable.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="people-section">
          <div className="container">
            <h2>Our People</h2>
            <div className="people-grid">
              <div className="person-card">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="John Smith" />
                <h3>John Smith</h3>
                <p className="position">Owner & Founder</p>
                <p>With over 20 years of experience in the restaurant industry, John brings his passion for great food and community to The HopYard.</p>
              </div>
              <div className="person-card">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Sarah Johnson" />
                <h3>Sarah Johnson</h3>
                <p className="position">Head Chef</p>
                <p>Sarah's culinary expertise and creative flair have helped establish The HopYard as a destination for exceptional pub fare.</p>
              </div>
              <div className="person-card">
                <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Mike Rodriguez" />
                <h3>Mike Rodriguez</h3>
                <p className="position">Beer Curator</p>
                <p>Mike's extensive knowledge of craft beers ensures our taps always feature the best local and regional brews.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 