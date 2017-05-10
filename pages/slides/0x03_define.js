import { Component } from 'react';
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
  }

  static async getInitialProps() {
    return {};
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
        <Slide>
          <Title>0x03_define</Title>
          <Headline>Was ist JavaScript</Headline>
          <Enum>Wurde von Netscape entwickelt</Enum>
          <Enum>Ist eine interpretierte Skriptsprache</Enum>
          <Enum>
            Wird für viele Bereiche genutzt
            <p>z.B.&nbsp;
            <a href="https://facebook.github.io/react-native/" target="_blank">Native Apps für Android, iOS,</a>&nbsp;
            <a href="https://electron.atom.io/" target="_blank">Windows und OSX,</a>&nbsp;<br />
            <a href="https://nodejs.org/en/" target="_blank">Serverseitige Programme,</a>&nbsp;
            <a href="https://facebook.github.io/react/" target="_blank">WebApps</a>&nbsp;...</p>
          </Enum>
          <SlideNavigation
            prev="/slides/0x02_struct"
            next="/slides/0x04_call_by_reference"
          />
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