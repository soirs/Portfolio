import React, { Component } from 'react';
import { Link } from 'gatsby';

import styles from './welcome.module.css';
import Fullscreen from '../fullscreen';
import Wrapper from '../wrapper';
import Some from '../some';

class Welcome extends Component {
  state = {
    hourOfDay: 'day,',
    isLoading: true,
  };

  componentDidMount() {
    const currentHour = new Date().getHours();

    this.setTimeOfDay(currentHour);
    this.setState({ isLoading: false });
  }

  setTimeOfDay(currentHour) {
    let time = 'day,';

    if (currentHour < 4) {
      time = 'night 🌌 ,';
    } else if (currentHour < 12) {
      time = 'morning 🌁🌅 ,';
    } else if (currentHour < 18) {
      time = 'afternoon 🌆 ,';
    } else if (currentHour < 22) {
      time = 'evening 🌃 ,';
    }
    this.setState({ hourOfDay: time });
  }

  render() {
    return (
      <div>
        <Fullscreen className={styles.intro} firstItem>
          <Wrapper>
            {this.state.isLoading ? (
              <p>Just a second</p>
            ) : (
              <h1>
                <span className={styles.welcome}>
                  Lovely {this.state.hourOfDay} I´m Frank.
                </span>
                <br />
                <br />
                I´m a frontend web developer.
                <br />
                <br />
                This is my{' '}
                <span className={styles.playground}>playground.</span>
                <br />
                <br />
                Here´s my{' '}
                <Link className={styles.link} to="/work/">
                  work
                </Link>
                .
              </h1>
            )}
            <Some />
          </Wrapper>
        </Fullscreen>
      </div>
    );
  }
}

export default Welcome;
