// components/header/header.js

import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.css';
import Wrapper from '../wrapper';

const Header = () => (
  <header className={styles.header}>
    <Wrapper>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <Link className={styles.link} to="/">
            Frank Richard Semakula
          </Link>
        </h1>
        <div className={styles.menu}>
          <Link className={styles.link} to="/about">
            <span>About</span>
          </Link>
          <Link className={styles.link} to="/work">
            <span>Work</span>
          </Link>
        </div>
      </div>
    </Wrapper>
  </header>
);

export default Header;
