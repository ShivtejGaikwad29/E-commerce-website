import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate(); // Hook to navigate between pages

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Krushna E Super Bazar</h1>
      <img className="imgkrushna my-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJER3vTRHkVPdySJ1KETLSVSAdoC5ixA2BXKoV_OzGJmLz-v18PQr7geg-ZEZGXkyZDo&usqp=CAU" alt="Lord Krushna" />
      <p>Your one-stop shop for groceries and stationery items.</p>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Shop by Category</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>🛒 Groceries – Fresh & Quality Food Essentials</li>
          <li>✏️ Stationery – School & Office Supplies</li>
          <li>🎁 Special Offers – Save More with Discounts!</li>
        </ul>
      </div>
      
      <button 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        onClick={() => navigate('/shop')} // Navigate to the shop page
      >
        Shop Now
      </button>
    </div>
  );
}
