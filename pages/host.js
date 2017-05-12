import { Component } from 'react';
import io from 'socket.io-client';
import Link from 'next/link';
import Router from 'next/router';
import fetch from 'isomorphic-fetch';

import Page from '../layouts/page.js';
import Slide from '../components/slide.js';

import withRedux from 'next-redux-wrapper';
import { makeStore, _changeRole } from '../components/store.js';

class Host extends Component {
  static async getInitialProps() {
    return {};
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
    this.props.changeRole('HOST');
    Router.replace(`/slides/0x01_hello_world`);
    // socket
    if (!this.state.socket) {
      const socket = io('http://localhost:3000');
      socket.on('viewer-update', data => {
        if (this.props.role === 'VIEWER') {
          Router.replace(data.url);
        }
      });
      this.setState(state => ( {socket: socket} ));
    }
  }

  componentWillUnmount() {
    if (this.state.socket)
      this.state.socket.close();
  }

  render () {
    return (
      <Page>
        <Slide>
          Hosting...
        </Slide>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  role: state.role
});

const mapDispatchToProps = dispatch => ({
  changeRole: role => (dispatch(_changeRole(role)))
});

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Host);