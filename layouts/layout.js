import { Component } from 'react';
import Head from 'next/head';
import io from 'socket.io-client';
import Router from 'next/router';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    if (!window.socket) {
      window.socket = io('http://localhost:3000');
      window.socket.on('viewer-update', data => {
        if (window.role === 'VIEWER') {
          Router.replace(data.url);
        }
      });
    }
    if (!window.role) {
      window.role = 'VISITOR';
    }
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <main>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700,700i" rel="stylesheet" />
        </Head>
        <style jsx global>
          {`
            * {
              box-sizing: border-box;
            }
            ::selection {
              color: #000;
              background-color: #f7df1e;
            }
            html, body {
              margin: 0;
              background-color: #000;
              width: 100vw;
              height: 100vh;
              color: rgba(255,255,255,.54);
              font-family: 'Roboto', sans-serif;
              font-size: 26px;
            }
            main {
              height: 100vh;
              width: 100vw;
              position: relative;
              padding: 2em 4em;
              max-width: 1920px;
              margin: auto;
              font-weight: 300;
            }
            img {
              max-width: 100%;
              vertical-aling: middle;
            }
            p {
              margin-top: .2em;
              margin-bottom: .7em;
            }
            a {
              text-decoration: none;
              display: inline-block;
              color: rgba(255,255,255,.54);
            }
            a:hover {
              color: rgba(255,255,255,.90);
            }
            ul {
              max-width: 100%;
            }
          `}
        </style>
        { this.props.children }
      </main>
    );
  }
}