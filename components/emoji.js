import { Component } from 'react';
import emoji from 'node-emoji';
import { Motion, spring } from 'react-motion';

import { getMaxWidth, getMaxHeight } from '../components/helper.js';

export default class Emoji extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.childFunction = this.childFunction.bind(this);
  }

  getRandomDefault() {
    return {
      x: (Math.random()*getMaxWidth()+1),
      y: -36,
      opacity: 1,
      stiffness: 8000,
      damping: 9000
    }
  }

  componentWillMount() {
    this.defaultStyle = this.getRandomDefault();
    this.nextStyle = {
      x: spring(this.defaultStyle.x), // Math.random()*500+200
      y: spring(this.defaultStyle.y + Math.round(Math.random()*-getMaxHeight())),
      opacity: .8
    };
  }

  childFunction(val) {
    const style = {
      transform: `translate3d(${val.x}px, ${val.y}px, 0)`,
      opacity: val.opacity
    }
    return (
      <span className="emoji" style={style}>{ emoji.get(this.props.name) }</span>
    );
  }

  render() {
    return (
      <Motion
        defaultStyle={this.defaultStyle}
        style={this.nextStyle}>
        { this.childFunction }
      </Motion>
    );
  }
}