// Work.js

import React from 'react';
// import { Link } from 'gatsby';
import Fullscreen from '../../components/fullscreen';
import Wrapper from '../../components/wrapper';
import Header from '../../components/header';
import OutboundLink from '../../components/outbound-link';

import styles from './work.module.css';
// import {Helmet} from "react-helmet";

// import projects from '../../projects/projects.js';
// {projects.map(project =>   )}

const Work = () => (
  <div>
    <Fullscreen className={styles.work} firstItem>
      <Header />
      <Wrapper>
        <h3>My work.</h3>
        <div className="work">
          <p className="">COMMERCIAL</p>
          <br />
          <div className="project som">
            <h2 className="underline">
              <a href="https://info.firstagenda.com/state-of-meetings">
                State of Meetings
              </a>
            </h2>
            <p>
              Internship at FirstAgenda. Display of the meeting landscape in
              Denmark 2018 Version 1.0
            </p>
            <br />
          </div>

          <hr />
          <p className="">PERSONAL PLAYGROUND</p>
          <br />

          <div className="project movie">
            <h2 className="underline">
              <OutboundLink to="https://frankrs-moviedb.surge.sh/">
                Movie Database
              </OutboundLink>
            </h2>
          </div>

          <div className="project quote">
            <h2 className="underline">
              <OutboundLink to="https://frankrs-quote-generator.netlify.com/">
                Quote Generator
              </OutboundLink>
            </h2>
            <p>
              Uses{' '}
              <a
                href="https://www.quotesondesign.com"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                QuotesOnDesign
              </a>{' '}
              API to fetch content
            </p>
          </div>
          <br />

          <div className="project wiki">
            <h2 className="underline">
              <OutboundLink to="https://frankrs-wikipedia-searcher.netlify.com/">
                Wikipedia Searcher
              </OutboundLink>
            </h2>
          </div>
        </div>
      </Wrapper>
    </Fullscreen>
  </div>
);

export default Work;
