/*
eslint-disable react/no-danger
*/
import React from 'react';
import Helmet from 'react-helmet';
import Header from './header';
import Main from './Main';

import '../css/normalize.css';
import '../css/document.css';
import '../css/typography.css';

export default ({ children, title, className = '' }) => [
  <Helmet
    key="app-head"
    titleTemplate="%s · Frank Semakula"
    defaultTitle="Frank Richard Semakula"
  >
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>Frank Richard Semakula | {title}</title>

    {/* Favicon stuff from realfavicongenerator.net */}
    <meta name="apple-mobile-web-app-title" content="frankrs.dk" />
    <meta name="application-name" content="frankrs.dk" />
    <meta name="theme-color" content="#c800ec" />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="../../assets/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="../../assets/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="../../assets/favicon-16x16.png"
    />
    <link rel="manifest" href="../../assets/site.webmanifest" />
    <link
      rel="mask-icon"
      href="../../assets/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <link rel="shortcut icon" href="../../assets/favicon.ico" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta
      name="msapplication-config"
      content="../../assets/browserconfig.xml"
    />
    <meta name="theme-color" content="#ffffff" />

    {/* Webfonts from typekit */}
    <link rel="stylesheet" href="https://use.typekit.net/qcn8ytc.css" />
  </Helmet>,
  <Header key="app-header" />,
  <Main key="app-main" className={className}>
    {children}
  </Main>,
];
