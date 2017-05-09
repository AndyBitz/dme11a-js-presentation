import { Component } from 'react';
import io from 'socket.io-client';
import Link from 'next/link';

import Page from '../layouts/page.js';
import Slide from '../components/slide.js';

class Join extends Component {
  static async getInitialProps() {
    return {};
  }
  
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      socket: undefined
    };
    this.emojiModule = this.emojiModule.bind(this);
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