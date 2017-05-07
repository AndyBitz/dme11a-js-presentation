import { Component } from 'react';
import emoji from 'node-emoji';

export default class EmojiController extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.handleClick = this.handleClick.bind(this);

    this.emojis = [
      'heart',
      'heart_eyes',
      'neutral_face',
      'nerd_face',
      'blush'
    ]
  }

  handleClick(data) {
    if (window.socket) {
      window.socket.emit('viewer-emoji', data);
    }
  }

  render() {
    return (
      <div>
        {
          this.emojis.map(emojiName => {
            return (
              <span
                onClick={ () => {this.handleClick({ name: emojiName})} }
                key={emojiName}>
                { emoji.get(emojiName) }
              </span>
            );
          })
        }
        <style jsx>
        {`
          div {
            position: fixed;
            z-index: 100;
            right: 1em;
            bottom: 1em;
            display: flex;
            align-items: center;
          }
          span {
            cursor: pointer;
            display: inline-block;
            text-align: center;
            font-size: 1.1em;
            width: 1em;
            height: 1em;
            margin: 0 8px;
            color: #fff;
          }
          span:first-child {
            transform: translateY(6px) scale(2)
          }
        `}
        </style>
      </div>
    );
  }
}