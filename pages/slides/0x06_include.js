import { Component } from 'react';
import Router from 'next/router';
import io from 'socket.io-client';

import Page from '../../layouts/page.js';
import Slide from '../../components/slide.js';
import Emojis from '../../components/emojis.js';
import SlideNavigation from '../../components/slidenavigation.js';
import { Title, Headline, Enum } from '../../components/text.js';

import withRedux from 'next-redux-wrapper';
import { makeStore, _changeRole } from '../../components/store.js';

class SlideThree extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      socket: undefined
    };
    this.emojiModule = this.emojiModule.bind(this);
    this.navModule = this.navModule.bind(this);
  }

  static async getInitialProps() {
    return {};
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
          prev="/slides/0x05_call_by_reference"
          next="/"
        />
      );
    } 
  }

  render() {
    return (
      <Page>
        <Slide>
          <Title>0x06_include</Title>
          <Headline>Libraries & Frameworks</Headline>
          <Enum>Enthalten Funktionen, Algorithmen, Variablen...</Enum>
          <Enum>
            Bsp:
            <a href="https://facebook.github.io/react/" target="_blank">react</a>
            <a href="https://jquery.com/" target="_blank">jquery</a>
            <a href="https://lodash.com/" target="_blank">lodash</a><br/>
            <a href="http://lokeshdhakar.com/projects/lightbox2/" target="_blank">Lightbox</a>
            <a href="https://troolee.github.io/gridstack.js/" target="_blank">Gridstack</a>
          </Enum>
          { this.navModule() }
        </Slide>
        { this.emojiModule() }
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  role: state.role
});

const mapDispatchToProps = dipatch => ({
  changeRole: role => (dispatch(_changeRole(role)))
});

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(SlideThree);