// Work/index.jsx

import React from 'react';
import Wrapper from '../../components/wrapper';
import Header from '../../components/header';
import WorkItems from '../../components/workItems';
import projects from '../../data/projects';
import styles from './work.module.css';
import ContentPage from '../../components/content-page';

const Work = () => {
  return (
    <div>
      <Header />
      <ContentPage className={styles.work}>
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
      </ContentPage>
    </div>
  );
};

export default Work;
