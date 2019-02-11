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

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/static/sw.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }

const IndexPage = () => (
  <div>
    <Header />
    <Fullscreen className={styles.intro} firstItem>
      <Wrapper>
        <h1 className="welcome">
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
    let time = '';
    const today = new Date();
    const currentHour = today.getHours();

    if (currentHour < 4) {
      time = 'night';
    } else if (currentHour < 12) {
      time = 'morning';
    } else if (currentHour < 18) {
      time = 'afternoon';
    } else {
      time = 'evening';
    }
    return (
      <span className={styles.welcome}>
          Lovely
        {' '}
        {time}
, I´m Frank.
      </span>
    );
  }
}


export default IndexPage;
