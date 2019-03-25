// pages/index.js
/* eslint-disable */ 
import React from 'react';

import Header from '../components/header';
import Meta from '../components/meta';
import Welcome from '../components/welcome';

import '../css/normalize.css';
import '../css/document.css';
// import styles from './index.module.css';

const IndexPage = ({ location }) => (
  <div>
    <Meta location={location} />
    <Header />
    <Welcome />
    {console.log(
      '%c ---> Hire@FrankRS.dk ',
      'font-weight: bold; font-size: 24px;color: red; '
    )}
  </div>
);

export default IndexPage;
