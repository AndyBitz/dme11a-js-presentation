import SyntaxHighlighter from 'react-syntax-highlighter';
import { Component } from 'react';
import { monokai } from 'react-syntax-highlighter/dist/styles';

export default class extends Component {
  constructor(props) {
    super(props);
    this.props = {
      language: props.language || 'javascript',
      children: props.children
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  copyAnimation() {
    const copyNode = document.createElement('div');
    copyNode.textContent = 'copied';
    copyNode.classList.add('copyText');
    copyNode.addEventListener('animationend', () => {
      copyNode.remove();
    });
    return copyNode;
  }

  onClickHandler(e) {
    const range = document.createRange();
    range.selectNodeContents(e.target);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    try {
      document.execCommand('copy');
      e.target.parentNode.prepend(this.copyAnimation());
    } catch(e) {
      selection.removeAllRanges();
      if (e) throw e;
    }
  }

  render() {
    return (
      <div>
        <SyntaxHighlighter 
          onClick={this.onClickHandler}
          language={this.props.language}
          style={monokai}
        >
        { this.props.children }
        </SyntaxHighlighter>
        <style jsx>
          {`
            div :global(.copyText) {
              position: absolute;
              transform: translateY(-100%);
              user-select: none;
              cursor: default;
              opacity: 0;
              animation: copy-animation 620ms forwards ease-out;
            }
            @keyframes copy-animation {
              0% {
                opacity: 0;
                transform: translateY(-100%);
              }
              50% {
                opacity: 1;
              }
              100% {
                opacity: 0;
                transform: translateY(-125%);
              }
            }
          `}
        </style>
      </div>
    );
  }
}