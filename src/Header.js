// src/components/Header.js
import React from 'react';
import logo from './logo.svg';
import './Header.css';
function Header() {
  return (
    <div class="block">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>도담도담</h1>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19V10C6 6.68629 8.68629 4 12 4V4C15.3137 4 18 6.68629 18 10V19M6 19H18M6 19H4M18 19H20" stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11 22L13 22" stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12" cy="3" r="1" stroke="#292929" stroke-width="2"/>
    </svg>

    </div>
  );
}

export default Header;
