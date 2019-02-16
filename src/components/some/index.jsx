// components/contact/contact.js

import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './some.module.css';

const Some = () => (
  <div className={styles.some}>
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://github.com/soirs/">
          <Icon name="github-white" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.linkedin.com/in/frankrichardsemakula">
          <Icon name="linkedin-white" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="mailto:Hello@frankrs.dk?subject=Hello%20Frank!">
          <Icon name="email-white" />
        </OutboundLink>
      </li>
    </ul>
  </div>
);

export default Some;
