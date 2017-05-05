export default ({ children }) => (
  <div>
    <h1>{ children }</h1>
    <style jsx>
      {`
        div {
          width: 100%;
          flex-basis: 100%;
        }
        h1 {
          color: rgba(255,255,255,.84);
          margin-top: 1em;
          margin-bottom: 2em;
        }
        h1 :global(small) {
          color: rgba(255,255,255,.54);
          font-size: .5em;
          font-family: monospace;
        }
        h1 :global(small::before) {
          content: ' — ';
        }
      `}
    </style>
  </div>
);