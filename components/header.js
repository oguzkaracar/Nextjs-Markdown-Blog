import React from 'react';
import Link from 'next/link';

import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.headerContainer}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <img src="/images/asset-2.png" alt="oguzkaracar.com" />
              </a>
            </Link>
          </div>
          <nav className={styles.menu}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/blog/">
              <a>Blog</a>
            </Link>
            <Link href="/about">
              <a>About Me</a>
            </Link>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Header;
