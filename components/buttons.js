import { Component } from 'react';
import Router from 'next/router';

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isHidden: false
    };
    this.clickPrevHandler = this.clickPrevHandler.bind(this);
    this.clickNextHandler = this.clickNextHandler.bind(this);
    this.hostEmit = this.hostEmit.bind(this);
  }

  componentDidMount() {
    if (window.role === 'VIEWER') {
      this.setState(state => {
        return { isHidden: true };
      })
    }
  }

  clickPrevHandler(e) {
    const url = this.props.prev;
    Router.push(url);
    this.hostEmit(url);
  }

  clickNextHandler(e) {
    const url = this.props.next;
    Router.push(url);
    this.hostEmit(url);
  }

  hostEmit(url) {
    if (window.role === 'HOST' && window.socket) {
      window.socket.emit('host-slide', { url: url });
    }
  }

  render() {
    if (this.props.prev && this.props.next && !this.state.isHidden) {
      return (
        <div>
          <a onClick={this.clickPrevHandler}>
            <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
              <path d="M0-.5h24v24H0z" fill="none"/>
            </svg>
          </a>
          <a onClick={this.clickNextHandler}>
            <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
              <path d="M0-.25h24v24H0z" fill="none"/>
            </svg>
          </a>
          <style jsx>
            {`
              div {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                height: 1.4em;
                text-align: center;
              }
              a {
                height: 24px;
                width: 24px;
                display: inline-block;
                padding: 0 6px;
              }
              a:hover svg {
                fill: rgba(255,255,255,.9);
              }
              svg {
                vertical-align: middle;
                fill: rgba(255,255,255,.54);
              }
            `}
          </style>
        </div>
      );
    }
    return null;
  }
}