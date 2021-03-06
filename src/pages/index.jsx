// pages/index.js
/* eslint-disable */
import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Header from '../components/header';
import Meta from '../components/meta';
import Welcome from '../components/welcome';

import '../css/normalize.css';
import '../css/document.css';

library.add(faLink, faGithub);

const IndexPage = ({ location }) => (
  <div>
    <Meta location={location} />
    <Header />
    <Welcome />
    {console.log(
      '%c|· Hire@FrankRS.dk ·|',
      `font-weight: bold;
       font-size: 24px;
       color: red;
        background-color: white;`
    )}
  </div>
);

export default IndexPage;
