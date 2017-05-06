import { Component } from 'react';
import Router from 'next/router';

import Layout from '../layouts/layout.js';

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Layout>
        <article>
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