// components/Header.js

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Redirect to the search results page or filter products based on the search query
    if (searchQuery.trim()) {
      // Redirect to a search results page
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
      // Or, if you're fetching products from an API, you can handle it here
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">MY ONLINE SHOP WEBSITE</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/shop">SHOP</Link>
        
        <Link href="/stories">STORIES</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT US</Link>
      </nav>
      <div className={styles.icons}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>🔍</button>
        </form>
        <span></span> {/* Wishlist Icon */}
        <span></span> {/* User Icon */}
        <span></span> {/* Language Dropdown */}
      </div>
    </header>
  );
};

export default Header;
