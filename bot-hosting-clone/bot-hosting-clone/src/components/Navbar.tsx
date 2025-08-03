import React from 'react';

const Navbar: React.FC = () => (
  <nav style={{ padding: '1rem', background: '#23272a', color: '#fff' }}>
    <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Bot Hosting</span>
    <span style={{ marginLeft: '2rem' }}>Home</span>
    <span style={{ marginLeft: '1rem' }}>Pricing</span>
    <span style={{ marginLeft: '1rem' }}>Features</span>
    <span style={{ marginLeft: '1rem' }}>Contact</span>
  </nav>
);

export default Navbar;
