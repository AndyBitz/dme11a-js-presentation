import { Component } from 'react';
import emoji from 'node-emoji';

const emojiMenu = (clickHandler, emojiList) => (
  emojiList.map(emojiName => {
    return (
      <span
        onClick={ () => {clickHandler(emojiName)} }
        key={emojiName}>
        { emoji.get(emojiName) }
      </span>
    );
  })
);

export default ({ clickHandler, emojiList }) => {
  return (
    <div>
      { emojiMenu(clickHandler, emojiList) }
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
        div :global(span) {
          cursor: pointer;
          display: inline-block;
          text-align: center;
          font-size: 1.1em;
          width: 1em;
          height: 1em;
          margin: 0 8px;
          color: #fff;
        }
      `}
      </style>
    </div>
  );
};