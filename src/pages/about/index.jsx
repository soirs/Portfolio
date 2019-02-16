// About.js

import React from 'react';
import ContentPage from '../../components/content-page';
import Wrapper from '../../components/wrapper';
import Header from '../../components/header';
import Contact from '../../components/contact';

import styles from './about.module.css';
// import {Helmet} from "react-helmet";
// About.js

// import React from "react";
// import "./about.css";
// import Icon from '../icon/Icon';

// import FrankImg from "./img/frank.JPG";
// import { Link } from "react-router-dom";

const About = () => (
  <div>
    <Header />
    <ContentPage>
      <Wrapper>
        <div className={styles.about}>
          <section className={styles.intro}>
            <h2 className="">Hello World!</h2>
            <h3>Who is this Frank?</h3>
            <p>I´m a frontend developer living in Aarhus, Denmark.</p>
            <p>
              I have always loved being creative and change the current
              paradigm.
              <br />I started my journey at Silkeborg School of Business where I
              studied Marketing and Innovation. Later I continued this journey
              and did an AP degree in Marketing Mangement and Innovation at
              Business Academy Aarhus.
            </p>
            <p>
              Eventually I realised that the internet held all I wanted whilst
              working and studying. That lead me to graduate as a WebIntegrator.
            </p>
            <p>Today I am studying a bachelor in Web Development. </p>
            <p>Take care.</p>
          </section>
          <aside className={styles.skills}>
            <div>
              <h3>Skills</h3>
              <h4>Presentation</h4>
              <p>Bootstrap, CSS, HTML, Sass</p>
              <h4>Javascript</h4>
              <p>Vanilla, jQuery, React</p>
              <h4>Database</h4>
              <p>MS SQL, MongoDB, Firebase</p>
              <h4>Misc</h4>
              <p>Git, SQL, Node, C#, ASP .Net</p>
            </div>
          </aside>
        </div>
        <Contact />
      </Wrapper>
    </ContentPage>
  </div>
);

export default About;
