import { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import Layout from '../layouts/layout.js';
import Buttons from '../components/buttons.js';

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    // TODO
    // emoji factory
    return (
      <Layout>
        <article>
          { this.props.children }
          <Buttons next={this.props.next} prev={this.props.prev} />
          <style jsx>
            {`
              article :global(a) {
                margin: 0 6px;
                font-size: .8em;
              }
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