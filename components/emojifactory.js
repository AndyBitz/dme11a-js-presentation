import { Component } from 'react';

import Emoji from '../components/emoji.js';

export default class EmojiFactory extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      emojis: []
    }
    this.pushEmoji = this.pushEmoji.bind(this);
  }

  componentDidMount() {
    if (window.socket) {
      window.socket.on('fire-emoji', data => {
        this.pushEmoji();
      });
    }
    // setInterval(() => {
    //   this.pushEmoji();
    // }, 4000);
  }

  pushEmoji() {
    this.setState(state => {
      const newEmojis = state.emojis.slice(-20);
      newEmojis.push(<Emoji name="heart" key={new Date().getTime()}/>);
      state.emojis = newEmojis;
      return  state;
    });
  }

  render() {
    return (
      <aside>
        { this.state.emojis.map(emoji => {
          return emoji;
        }) }
        <style jsx>
          {`
            aside {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              overflow: hidden;
            }
            aside :global(span) {
              font-size: 1.6em;
              width: 1em;
              height: 1em;
              text-align: center;
              position: absolute;
              bottom: 0;
              animation: removeEmoji 300ms 6s forwards ease-out;
            }
            @keyframes removeEmoji {
              from {
                opacity: 1;
              }
              to {
                opacity: 0;
              }
            }
          `}
        </style>
      </aside>
    );
  }  
}