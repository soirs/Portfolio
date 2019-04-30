// Work.js
import React from 'react';
import classNames from 'classnames';

// import Wrapper from '../wrapper';
import OutboundLink from '../outbound-link';
import styles from './styles.module.css';

// Font Awesome svg
import Github from '../font-awesome/github';
import Demo from '../font-awesome/link';

const WorkItems = ({ project }) => (
  <div className={styles.item}>
    <div className={styles.border__left}>
      <div className={classNames(styles.card)}>
        <h2
          className={classNames(
            styles.title,
            'underline',
            styles.padding__left
          )}
        >
          {project.title}
        </h2>
        <div className={styles.padding__left}>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.links}>
            <OutboundLink
              className={classNames(styles.website, styles.link__hover)}
              to={project.links.website}
            >
              <Demo /> Demo
            </OutboundLink>
            {` // `}
            <OutboundLink
              className={classNames(styles.github, styles.link__hover)}
              to={project.links.github}
            >
              <Github /> Github
            </OutboundLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  //   <Wrapper>
  //   <div className={styles.inner} style={{ backgroundImage: `url(${project.cover})` }}>
  //     <div className={styles.content}>
  //       <h2>{project.title}</h2>
  //       <p>{project.description}</p>
  //     </div>
  //   </div>
  // </Wrapper>
);

export default WorkItems;
