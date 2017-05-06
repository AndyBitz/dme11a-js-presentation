import { Component } from 'react'
import io from 'socket.io-client'
import emoji from 'node-emoji';
import Link from 'next/link';

import Slide from '../components/slide.js';

export default class Home extends Component {

  componentDidMount() {
    if (window) {
      window.role === 'VISITOR';
    }
  }

  render () {
    return (
      <Slide className={'article'}>
        <Link href="/join"><a>Join</a></Link>
        <Link href="/overview"><a>Overview</a></Link>
        <a href="#">Source</a>
        <style>
          {`
            article {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            a {
              margin: 0 8px;
            }
          `}
        </style>
      </Slide>
    )
  }
}