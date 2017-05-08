import { Component } from 'react';

import EmojiFactory from '../components/emojifactory.js';
import EmojiController from '../components/emojicontroller.js';

class Emojis extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.clickHandler = this.clickHandler.bind(this);
    this.emojiList = [
      'heart',
      'heart_eyes',
      'neutral_face',
      'nerd_face',
      'blush'
    ];
  }

  componentDidMount() {
    console.log(this.props);
    if (!this.props.socket) return;
    this.props.socket.on('host-emoji-update', data => {
      console.log('got emoji');
      // add emoji to state
    });
  }

  clickHandler(emoji) {
    console.log('emit emoji');
    if (!this.props.socket) return;
    console.log('socket is avail');
    this.props.socket.emit('viewer-emoji', { name: emoji });
  }

  render() {
    return (
      <div className="emoji">
        <EmojiFactory />
        <EmojiController
          clickHandler={this.clickHandler}
          emojiList={this.emojiList}
        />
        <style jsx>
          {`
            .emoji {
              position: relative;
              z-index: 0;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Emojis;