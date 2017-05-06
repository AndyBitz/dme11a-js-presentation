import { Component } from 'react';
import Router from 'next/router';

import Slide from '../components/slide.js';

export default class Join extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    if (window) {
      window.role = 'VIEWER';
      Router.push('/slides/0x01_hello_world');
    }
  }

  render() {
    return (
      <Slide>
        joining ...
      </Slide>
    );
  }
}