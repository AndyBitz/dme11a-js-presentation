import { Component } from 'react';
import io from 'socket.io-client';
import Link from 'next/link';

import Page from '../layouts/page.js';
import Slide from '../components/slide.js';

class Join extends Component {
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
    if (!window.socket) {
      window.socket = io('http://localhost:3000');
      window.socket.on('viewer-update', data => {
        if (window.role === 'VIEWER') {
          Router.replace(data.url);
        }
      });
    }
  }

  render () {
    return (
      <Page>
        <Slide>
          joining...
        </Slide>
      </Page>
    );
  }
}

export default Join;