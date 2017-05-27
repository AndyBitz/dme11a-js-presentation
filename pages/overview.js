import { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import io from 'socket.io-client';

import Page from '../layouts/page.js';
import Slide from '../components/slide.js';
import Emojis from '../components/emojis.js';
import { Headline } from '../components/text.js';

import withRedux from 'next-redux-wrapper';
import { makeStore, _changeRole } from '../components/store.js';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      socket: undefined
    };
    this.emojiModule = this.emojiModule.bind(this);
  }

  static async getInitialProps({ isServer }) {
    let host = 'http://localhost:3000';
    if (!isServer)      
      host = `${location.protocol}//${location.host}`;
    const request = await fetch(`${host}/static/slides.json`);
    const slides = await request.json();
    return { slides: slides.slides };
  }

  componentDidMount() {
    console.log(this.props);
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

  prepareList() {
    return this.props.slides.map((slide, index) => {
      slide.key = index;
      return (<li key={slide.key}><Link href={`/slides/${slide.name}`} prefetch><a>{slide.name}</a></Link></li>);
    });
  }

  render() {
    return (
      <Page>
        <Slide>
          <Headline>Übersicht</Headline>
          <ul>{ this.prepareList() }</ul>
          <style jsx>
            {`
              ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
              }
              ul :global(li) {
                display: block;
                margin-bottom: .4em;
              }
            `}
          </style>
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

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Overview);