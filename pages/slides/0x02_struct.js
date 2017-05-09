import { Component } from 'react';
import io from 'socket.io-client';

import Page from '../../layouts/page.js';
import Slide from '../../components/slide.js';
import Title from '../../components/title.js';
import Headline from '../../components/headline.js';
import Enum from '../../components/enum.js';
import Emojis from '../../components/emojis.js';
import SlideNavigation from '../../components/slidenavigation.js';

class SlideTwo extends Component {
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

  render() {
    return (
      <Page>
        <Slide next={'/slides/0x03_define'} prev={'/slides/0x01_hello_world'}>
          <Title>0x02_struct</Title>
          <Headline>Gliederung</Headline>
          <Enum>Was ist JavaScript</Enum>
          <Enum>Wo wird es verwendet</Enum>
          <Enum>Anwendung im Browser</Enum>
          <Enum>Libraries & Frameworks</Enum>
          <SlideNavigation
            prev="/slides/0x01_hello_world"
            next="/slides/0x03_define"
          />
        </Slide>
        { this.emojiModule() }
      </Page>
    );
  }
}

export default SlideTwo;