import { Component } from 'react'
import io from 'socket.io-client'
import emoji from 'node-emoji';
import Link from 'next/link';

import Slide from '../components/slide.js';


export default class HomePage extends Component {
  render () {
    return (
      <Slide>
        <Link href="index"><a>Join</a></Link>
        <Link href="slides"><a>Slides</a></Link>
        <Link href="index"><a>Host</a></Link>
        <style jsx>
          {`
            article {
              display: block;
            }
          `}
        </style>
      </Slide>
    )
  }
}