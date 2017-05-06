import { Component } from 'react';
import Router from 'next/router';

import Slide from '../components/slide.js';

export default class Join extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    // TODO
    // set state to viewer
    Router.replace('/slides/0x01_hello_world');
  }

  render() {
    return (
      <Slide>
        joining ...
      </Slide>
    );
  }
}