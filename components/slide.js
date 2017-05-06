import { Component } from 'react';
import Router from 'next/router';

import Layout from '../layouts/layout.js';
import io from 'socket.io-client';

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('mounted');
    this.socket = io('http://localhost:3000/');
    this.socket.on('change-slide', data => {
      if (window.role === 'VIEWER') {
        Router.push(data.url);
      }
    });
  }

  handleClick(e) {
    if (window.role === 'VIEWER') return;
    if (e.pageX > document.body.clientWidth/2) {
      // next
      if (this.props.next) {
        Router.push(this.props.next);
        if (window.role === 'HOST') {
          this.socket.emit('host-emit', {
            url: this.props.next
          });
        }
      }
    } else {
      // prev
      if (this.props.prev) {
        Router.push(this.props.prev);
        if (window.role === 'HOST') {
          this.socket.emit('host-emit', {
            url: this.props.prev
          });
        }
      }
    }
  }

  render() {
    return (
      <Layout>
        <article onClick={this.handleClick}>
          { this.props.children }
          <style jsx>
            {`
              article {
                width: 100%;
                height: 100%;
              }
            `}
          </style>
        </article>
      </Layout>
    );
  }
}