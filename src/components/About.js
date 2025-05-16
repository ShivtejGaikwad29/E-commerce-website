import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>About Krushna E Super Bazar</h1>
        <p>
          Krushna E Super Bazar is your go-to online store for all your grocery 
          and stationery needs. We aim to provide quality products at the best prices, 
          delivered right to your doorstep.
        </p>

        <h2>Why Choose Us?</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>✅ Wide Range of Grocery & Stationery Items</li>
          <li>✅ Affordable Prices & Exciting Discounts</li>
          <li>✅ Fast & Reliable Home Delivery</li>
          <li>✅ Easy & Secure Shopping Experience</li>
        </ul>

        <p>Shop with us today and experience hassle-free online shopping!</p>
      </div>
    );
  }
}
