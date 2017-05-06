import { Component } from 'react'
import io from 'socket.io-client'
import emoji from 'node-emoji';
import Link from 'next/link';

import Slide from '../components/slide.js';

export default class Home extends Component {
  // TODO
  // set state to visitor
  render () {
    return (
      <Slide className={'article'}>
        <Link href="/join"><a>Join</a></Link>
        <Link href="/overview"><a>Overview</a></Link>
        <a href="https://github.com/AndyBitz/dme11a-js-presentation" target="_blank">Source</a>
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