import { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Link from 'next/link';

import Slide from '../components/slide.js';
import Headline from '../components/headline.js';

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.slides = [
        { name: '0x01_hello_world' },
        { name: '0x02_struct' },
        { name: '0x03_define' },
        { name: '0x04_call_by_reference' },
      ];
  }

  prepareList() {
    return this.slides.map((slide, index) => {
      slide.key = index;
      return (<li key={slide.key}><Link href={`/slides/${slide.name}`}><a>{slide.name}</a></Link></li>);
    });
  }

  render() {
    return (
      <Slide>
        <Headline>Übersicht</Headline>
        <ul>{ this.prepareList() }</ul>
        <style jsx>
          {`
            ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
            }
            ul :global(li) {
              display: block;
              margin-bottom: .4em;
            }
          `}
        </style>
      </Slide>
    );
  }
}