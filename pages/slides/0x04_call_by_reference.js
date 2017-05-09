import { Component } from 'react';
import io from 'socket.io-client';
import fetch from 'isomorphic-fetch';

import Page from '../../layouts/page.js';
import Slide from '../../components/slide.js';
import Title from '../../components/title.js';
import Headline from '../../components/headline.js';
import Enum from '../../components/enum.js';
import Code from '../../components/code.js'
import Column from '../../components/column.js';
import Emojis from '../../components/emojis.js';
import SlideNavigation from '../../components/slidenavigation.js';

import withRedux from 'next-redux-wrapper';
import { makeStore, _changeRole } from '../components/store.js';

class SlideFour extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      socket: undefined
    };
    this.emojiModule = this.emojiModule.bind(this);
  }

  static async getInitialProps() {
    const response = await fetch('http://localhost:3000/static/html_template.txt');
    const htmlCode = await response.text();
    return { htmlCode };
  }

  componentDidMount() {
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

  emojiModule() {
    if (!this.state.socket) return null;
    return (
      <Emojis
        socket={this.state.socket}
      />
    );
  }

  render() {
    return (
      <Page>
        <Slide next={'/'} prev={'/slides/0x03_define'}>
          <Title>0x04_call_by_reference</Title>
          <Headline>Anwendung im Browser</Headline>
          <Column>
            <Enum>JavaScript kann direkt im { '<script>-Tag' } geschrieben werden</Enum>
            <Enum>oder als externe Datei durch das src-Attribut eingebunden werden</Enum>
          </Column>
          <Column>
            <Code language='html'>{ this.props.htmlCode }</Code>
          </Column>
          <SlideNavigation
            prev="/slides/0x03_define"
            next="/"
          />
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