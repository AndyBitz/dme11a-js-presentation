import { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import Buttons from '../components/buttons.js';
import EmojiFactory from '../components/emojifactory.js';
import EmojiController from '../components/emojicontroller';

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <section>
        <article>
          { this.props.children }
          <Buttons next={this.props.next} prev={this.props.prev} />
        </article>
        <EmojiFactory />
        <EmojiController />
        <style jsx>
            {`
              section {
                width: 100%;
                height: 100%;
              }
              article :global(a) {
                margin: 0 6px;
                font-size: .8em;
              }
              article {
                width: 100%;
                height: 100%;
                position: relative;
                z-index: 10;
              }
            `}
          </style>
      </section>
    );
  }
}