import React from 'react';
import Helmet from 'react-helmet';
import { siteMetadata as config } from '../../../gatsby-config';

const Meta = props => {
  const mainTitle = `${config.title} - Greetings`;
  const metaTitle = props.title ? `${props.title} | ${mainTitle}` : mainTitle;
  const metaDescription = props.description || config.description;
  const absoluteUrl = `${config.url}${props.location.pathname}`;

  const meta = [
    { name: 'og:title', content: metaTitle },
    { name: 'description', content: metaDescription },
    { name: 'og:description', content: metaDescription },
    { property: 'og:url', content: absoluteUrl },
  ];

  if (props.noIndex) {
    meta.push({ name: 'robots', content: 'noindex' });
  }

  return (
    <Helmet title={metaTitle} meta={meta}>
      <html lang="en" amp />
    </Helmet>
  );
};

export default Meta;
