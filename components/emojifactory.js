export default ({ activeEmojis }) => (
  <aside>
    { activeEmojis.map(emoji => {
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