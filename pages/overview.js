import { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import io from 'socket.io-client';

import Page from '../layouts/page.js';
import Slide from '../components/slide.js';
import Headline from '../components/headline.js';
import Emojis from '../components/emojis.js';

class Overview extends Component {
  static async getInitialProps() {
    const request = await fetch('http://localhost:3000/api/slides.json');
    const slides = await request.json();
    return { slides: slides.slides };
  }

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    // role
    if (!window.role) {
      window.role = 'VISITOR';
    } else if (window.role !== 'HOST') {
      window.role = 'VISITOR';
    }
    // socket
    if (!window.socket) {
      window.socket = io('http://localhost:3000');
      window.socket.on('viewer-update', data => {
        if (window.role === 'VIEWER') {
          Router.replace(data.url);
        }
      });
    }
  }

  prepareList() {
    return this.props.slides.map((slide, index) => {
      slide.key = index;
      return (<li key={slide.key}><Link href={`/slides/${slide.name}`} prefetch><a>{slide.name}</a></Link></li>);
    });
  }

  render() {
    return (
      <Page>
        <Slide>
          <Headline>Übersicht</Headline>
          <ul>{ this.prepareList() }</ul>
          <style jsx>
            {`
              ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
              }
              ul :global(li) {
                display: block;
                margin-bottom: .4em;
              }
            `}
          </style>
          <Emojis />
        </Slide>
      </Page>
    );
  }
}

export default Overview;