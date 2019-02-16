// pages/index.js

import React from 'react';
import { Link } from 'gatsby';

import Fullscreen from '../components/fullscreen';
import Wrapper from '../components/wrapper';
import Some from '../components/some';
import Header from '../components/header';
// import layout from '../components/layouts/';
import '../css/normalize.css';
import '../css/document.css';
import '../css/typography.css';
import styles from './index.module.css';

const IndexPage = () => (
  <div>
    <Header />
    <Fullscreen className={styles.intro} firstItem>
      <Wrapper>
        <h1>
          <Welcome />
          <br />
          <br />
       I´m a frontend web developer.
          <br />
          <br />
          This is my
          {' '}
          <span className={styles.playground}>
            playground.
          </span>
          <br />
          <br />
       Here´s my
          {' '}
          <Link className={styles.link} to="/work/">work</Link>
.
        </h1>
        <Some />
      </Wrapper>
    </Fullscreen>
  </div>
);

class Welcome extends React.Component {
  render() {
    let time;
    const today = new Date();
    const currentHour = today.getHours();

    if (currentHour < 4) {
      time = 'night 🌌';
    } else if (currentHour < 12) {
      time = 'morning 🌁🌅';
    } else if (currentHour < 18) {
      time = 'afternoon 🌆 ';
    } else if (currentHour < 22) {
      time = 'evening 🌃';
    }

    // eslint-disable-next-line
    console.log('%c ---> Hire@FrankRS.dk ', 'font-weight: bold; font-size: 24px;color: red; ');
    return (
      <span className={styles.welcome}>
          Lovely
        {' '}
        {time}
        {' '}
, I´m Frank.
      </span>
    );
  }
}


export default IndexPage;
