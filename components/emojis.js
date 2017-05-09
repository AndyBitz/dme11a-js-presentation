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
      'blush',
      'nerd_face',
      'neutral_face',
      'angry'
    ];
  }

  componentDidMount() {
    if (!this.props.socket) return;
    this.props.socket.on('host-emoji-update', data => {
      this.setState(state => {
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
              overflow: visible;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Emojis;