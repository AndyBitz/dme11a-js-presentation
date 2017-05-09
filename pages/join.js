import { Component } from 'react';
import io from 'socket.io-client';
import Link from 'next/link';
import Router from 'next/router';
import fetch from 'isomorphic-fetch';

import Page from '../layouts/page.js';
import Slide from '../components/slide.js';

class Join extends Component {
  static async getInitialProps() {
    const request = await fetch('http://localhost:3000/api/current.json');
    const current = await request.json();
    return { slide: current.current };
  }

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      socket: undefined
    };
  }

  componentDidMount() {
    // role
    window.role = 'VIEWER';
    Router.replace(`/slides/${this.props.slide}`);
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