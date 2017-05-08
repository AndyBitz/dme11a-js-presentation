import { Component } from 'react';
import io from 'socket.io-client';
import Link from 'next/link';

import Page from '../layouts/page.js';
import Slide from '../components/slide.js';
import SlideNavigation from '../components/slidenavigation.js';
import Emojis from '../components/emojis.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      socket: undefined
    };
    this.emojiModule = this.emojiModule.bind(this);
  }

  static async getInitialProps() {
    return {};
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

  emojiModule() {
    if (!this.state.socket) return null;
    return (
      <Emojis
        socket={this.state.socket}
      />
    );
  }

  render () {
    return (
      <Page>
        <Slide className={'article'}>
          <Link href="/join"><a>Join</a></Link>
          <Link href="/overview"><a>Overview</a></Link>
          <a href="https://github.com/AndyBitz/dme11a-js-presentation" target="_blank">Source</a>
          <style>
            {`
              article {
                display: flex;
                justify-content: center;
                align-items: center;
              }
              a {
                margin: 0 8px;
              }
            `}
          </style>
        </Slide>
        { this.emojiModule() }
      </Page>
    );
  }
}

export default Home;