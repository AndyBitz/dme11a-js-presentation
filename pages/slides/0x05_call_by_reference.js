import { Component } from 'react';
import Router from 'next/router';
import io from 'socket.io-client';
import fetch from 'isomorphic-fetch';

import Page from '../../layouts/page.js';
import Slide from '../../components/slide.js';
import Code from '../../components/code.js'
import Emojis from '../../components/emojis.js';
import SlideNavigation from '../../components/slidenavigation.js';
import { Title, Headline, Enum, Column } from '../../components/text.js';

import withRedux from 'next-redux-wrapper';
import { makeStore, _changeRole } from '../../components/store.js';

class SlideFour extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      socket: undefined
    };
    this.emojiModule = this.emojiModule.bind(this);
    this.navModule = this.navModule.bind(this);
  }

  static async getInitialProps({ isServer }) {
    let host = 'http://localhost:3000';
    if (!isServer)      
      host = `${location.protocol}//${location.host}`;
    const response = await fetch(`${host}/static/html_template.txt`);
    const htmlCode = await response.text();
    return { htmlCode };
  }

  componentDidMount() {
    // socket
    if (!this.state.socket) {
      const socket = io(`${location.protocol}//${location.host}/`);
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

  emojiModule() {
    if (this.state.socket) {
      return (
        <Emojis
          socket={this.state.socket}
        />
      );
    }
  }

  navModule() {
    if (this.state.socket && this.props.role) {
      return (
        <SlideNavigation
          role={this.props.role}
          socket={this.state.socket}
          prev="/slides/0x04_y_tho"
          next="/slides/0x06_include"
        />
      );
    } 
  }

  render() {
    return (
      <Page>
        <Slide>
          <Title>0x05_call_by_reference</Title>
          <Headline>Anwendung im Browser</Headline>
          <Column>
            <Enum>JavaScript kann direkt im { '<script>-Tag' } geschrieben werden</Enum>
            <Enum>oder als externe Datei durch das src-Attribut eingebunden werden</Enum>
          </Column>
          <Column>
            <Code language='html'>{ this.props.htmlCode }</Code>
          </Column>
          { this.navModule() }
        </Slide>
        { this.emojiModule() }
      </Page>
    );
  }
};

const mapStateToProps = state => ({
  role: state.role
});

const mapDispatchToProps = dipatch => ({
  changeRole: role => (dispatch(_changeRole(role)))
});

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(SlideFour);