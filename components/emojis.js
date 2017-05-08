import { Component } from 'react';

import EmojiFactory from '../components/emojifactory.js';
import EmojiController from '../components/emojicontroller.js';
import Emoji from '../components/emoji.js';

class Emojis extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      activeEmojis: []
    };
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
    if (!this.props.socket) return;
    this.props.socket.on('host-emoji-update', data => {
      this.setState(state => {
        console.log(state);
        const newEmojis = state.activeEmojis.slice(-20);
        newEmojis.push(<Emoji name={data.name} key={new Date().getTime()}/>);
        state.activeEmojis = newEmojis;
        return state;
      });
    });
  }

  clickHandler(emoji) {
    if (!this.props.socket) return;
    this.props.socket.emit('viewer-emoji', { name: emoji });
  }

  render() {
    return (
      <div className="emoji">
        <EmojiFactory
          activeEmojis={this.state.activeEmojis}
        />
        <EmojiController
          clickHandler={this.clickHandler}
          emojiList={this.emojiList}
        />
        <style jsx>
          {`
            .emoji {
              position: fixed;
              z-index: 0;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;              
            }
          `}
        </style>
      </div>
    );
  }
}

export default Emojis;