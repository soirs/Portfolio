// Quote.js

import React from 'react';

// import Fullscreen from '../../../components/fullscreen/fullscreen';
import styles from './quote.module.css';
import Wrapper from '../../../components/wrapper';
import ContentPage from '../../../components/content-page';
import OutboundLink from '../../../components/outbound-link';


class Quote extends React.Component {
  constructor() {
    // constructor(props) {
    super();
    this.state = {
      url:
        'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      quote: [
        {
          ID: 2177,
          content:
            '<p>Minimalism is not a lack of something. It’s simply the perfect amount of something.</p>',
          link: 'https://quotesondesign.com/nicholas-burroughs-3/',
          title: 'Nicholas Burroughs',
        },
      ],
    };
  }


  // Button got cached on press
      getNewQuote = () => {
      // Had to add no-store.
      // Took me quite a few hours to realize
        fetch(this.state.url, { cache: 'no-store' })
          .then(response => response.json())
          .then(data => this.storeQuote(data))
          .catch(error => console.error(error));
      };

    // STORES THE QUOTES IN THIS METHOD
    storeQuote = data => {
      const quote = data.map(result => {
        const {
          ID, title, content, link,
        } = result;
        return {
          ID, title, content, link,
        };
      });
      this.setState({ quote });
      // console.log({ quote.title });
      // console.log({ quote.title });
    }

    render() {
      return (
        <div>
          <ContentPage className={styles.quote}>
            <Wrapper>
              {
                <div>
                  {this.state.quote.map(quote => (
                    <div className={styles.content} key={quote.ID}>
                      <div className="">
                        {/* Quote breaks /n at "." */}
                        <p
                          className={styles.text}
                          dangerouslySetInnerHTML={{
                            __html: quote.content.split('. ').join('.</br>'),
                          }}
                        />

                        <OutboundLink to={quote.link} className={styles.author} alt="To QuotesOnDesign page for this quote">
                          {quote.title}

                        </OutboundLink>

                        <br />
                        <button
                          type="submit"
                          id="quote__button"
                          className={styles.quote__button}
                          onClick={this.getNewQuote}
                        >
                      Get a new quote
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
          }
            </Wrapper>
          </ContentPage>
        </div>
      );
    }
}

export default Quote;
