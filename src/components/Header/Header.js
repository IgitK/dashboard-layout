import React from 'react';
import styles from './Header.module.css';

const Header = ({ onMenuClick }) => {
  return (
    <header className={styles.header}>
      <button onClick={onMenuClick}>Menu</button>
    </header>
  );
};

export default Header;
