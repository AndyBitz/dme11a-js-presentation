import { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import io from 'socket.io-client';

import Page from '../layouts/page.js';
import Slide from '../components/slide.js';
import Headline from '../components/headline.js';
import Emojis from '../components/emojis.js';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      socket: undefined
    };
    this.emojiModule = this.emojiModule.bind(this);
  }

  static async getInitialProps() {
    const request = await fetch('http://localhost:3000/api/slides.json');
    const slides = await request.json();
    return { slides: slides.slides };
  }


  componentDidMount() {
    // role
    if (!window.role) {
      window.role = 'VISITOR';
    } else if (window.role !== 'HOST') {
      window.role = 'VISITOR';
    }
    // socket
    if (!this.state.socket) {
      const socket = io('http://localhost:3000');
      socket.on('viewer-update', data => {
        if (window.role === 'VIEWER') {
          Router.replace(data.url);
        }
      });
      this.setState(state => ( {socket: socket} ));
    }
  }

  componentWillUnmount() {
    this.state.socket.close();
  }

  emojiModule() {
    if (!this.state.socket) return null;
    return (
      <Emojis
        socket={this.state.socket}
      />
    );
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
        </Slide>
        { this.emojiModule() }
      </Page>
    );
  }
}

export default Overview;