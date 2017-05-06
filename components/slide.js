import { Component } from 'react';
import Router from 'next/router';

import Layout from '../layouts/layout.js';

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (window.role === 'VIEWER') return;
    if (e.pageX > document.body.clientWidth/2) {
      // next slide
      (this.props.next) ? Router.push(this.props.next) : null;
    } else {
      // prev slide
      (this.props.prev) ? Router.push(this.props.prev) : null;        
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