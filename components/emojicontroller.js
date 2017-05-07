import { Component } from 'react';
import emoji from 'node-emoji';

export default class EmojiController extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.handleClick = this.handleClick.bind(this);
    this.heartClick = this.heartClick.bind(this);
  }

  handleClick(data) {
    if (window.socket) {
      window.socket.emit('viewer-emoji', data);
    }
  }

  heartClick() {
    this.handleClick({ name: 'heart' });
  }

  render() {
    return (
      <div>
        <span onClick={this.heartClick} >{ emoji.get('heart') }</span>
        <style jsx>
        {`
          div {
            position: fixed;
            bottom: 0;
            right: 0;
            height: 2em;
            width: 2em;
            z-index: 100;
          }
          span {
            cursor: pointer;
            display: block;
            text-align: center;
            font-size: 2em;
          }
        `}
        </style>
      </div>
    );
  }
}