import React, { useState } from 'react';
import '../../styles/Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuData = {
    appetizers: [
      {
        name: 'Hop Yard Wings',
        description: 'Traditional or boneless wings tossed in your choice of sauce: Mild, Hot, BBQ, Garlic Parmesan, or our signature Hop Yard sauce',
        price: 13.99
      },
      {
        name: 'Loaded Nachos',
        description: 'Tortilla chips topped with melted cheese, seasoned ground beef, jalapeños, tomatoes, and sour cream',
        price: 11.99
      },
      {
        name: 'Pretzel Bites',
        description: 'Warm pretzel bites served with beer cheese and honey mustard',
        price: 9.99
      }
    ],
    burgers: [
      {
        name: 'Classic Pub Burger',
        description: 'Half-pound Angus beef patty with lettuce, tomato, onion, and your choice of cheese',
        price: 14.99
      },
      {
        name: 'Bacon Blue Burger',
        description: 'Topped with crispy bacon, blue cheese crumbles, and caramelized onions',
        price: 16.99
      },
      {
        name: 'Mushroom Swiss Burger',
        description: 'Sautéed mushrooms and melted Swiss cheese with garlic aioli',
        price: 15.99
      }
    ],
    entrees: [
      {
        name: 'Fish & Chips',
        description: 'Beer-battered cod served with fries, coleslaw, and tartar sauce',
        price: 17.99
      },
      {
        name: 'Steak & Fries',
        description: '12oz ribeye steak with garlic butter, served with seasoned fries',
        price: 26.99
      },
      {
        name: 'Chicken Tenders',
        description: 'Hand-breaded chicken tenders with fries and your choice of sauce',
        price: 13.99
      }
    ],
    drinks: [
      {
        name: 'Draft Beer',
        description: 'Selection of domestic and craft beers. Ask your server for current offerings',
        price: '5.00 - 8.00'
      },
      {
        name: 'Signature Cocktails',
        description: 'Handcrafted cocktails made with premium spirits',
        price: '9.00 - 12.00'
      },
      {
        name: 'Wine',
        description: 'House and premium wines by the glass',
        price: '7.00 - 10.00'
      }
    ]
  };

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <h1>Our Menu</h1>
        <p>Quality pub fare and craft beverages</p>
      </div>

      <div className="menu-content">
        <div className="menu-nav">
          {Object.keys(menuData).map(category => (
            <button
              key={category}
              className={`menu-nav-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="menu-items">
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="menu-item-header">
                <h3>{item.name}</h3>
                <span className="price">${item.price}</span>
              </div>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu; 