import React from 'react';

import Fullscreen from '../components/fullscreen';
import ContentPage from '../components/content-page';
import styles from './index.module.css';

const NotFoundPage = () => (
  <div>
    <Fullscreen>
      <ContentPage>
        <div className={styles.frawn}>
          <h3>|wWw|</h3>
          <h1>4 oh 4</h1>
          <h2>Whoops. </h2>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2> Looks like a dead end.</h2>

        <p>
Sadness.
          {' '}
          <br />
          {' '}
Coffee´s on me.
        </p>
      </ContentPage>
    </Fullscreen>
  </div>
);

export default NotFoundPage;
