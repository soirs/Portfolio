import React from 'react';
import Fullscreen from '../../components/fullscreen';
import Wrapper from '../../components/wrapper';
import Header from '../../components/header';
import WorkItems from '../../components/workItems';
import projects from '../../data/projects';
import styles from './work.module.css';

// import OutboundLink from '../../components/outbound-link';

const Work = () => {
  return (
    <div>
      <Header />
      <Fullscreen className={styles.work}>
        <Wrapper>
          <div className={styles.projects}>
            <div className={styles.header}>
              <p className={styles.header__text}> |Personal projects</p>
            </div>
            <div className={styles.personal__items} />
            {projects.map(project => (
              <WorkItems project={project} key={project.slug} />
            ))}
          </div>
        </Wrapper>
      </Fullscreen>
    </div>
  );
};

export default Work;
