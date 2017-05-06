export default ({ children }) => (
  <div>
    { children }
    <style jsx>
      {`
        span::before {
          content: '—';
          display: inline-block;
          width: 2em;
        }
        div {
          font-size: 1.2em;
          margin-bottom: 1.4em;
        }
        div :global(p) {
          font-size: .7em;
        }
      `}
    </style>
  </div>
);