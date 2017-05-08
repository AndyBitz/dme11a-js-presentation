import { Component } from 'react';
import Router from 'next/router';

import Page from '../layouts/page.js';
import Slide from '../components/slide.js';

export default class Join extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    window.role = 'VIEWER';
    fetch('http://localhost:3000/api/current.json')
    .then(request => {
      return request.json();
    }).then(name => {
      Router.replace(`/slides/${name.current}`);
    });
  }

  render() {
    return (
      <Page>
        <Slide>
          joining ...
        </Slide>
      </Page>
    );
  }
}