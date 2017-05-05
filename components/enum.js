export default ({ children }) => (
  <div className={'enum'}>
    <span></span>
    <div>{ children }</div>
    <style jsx>
      {`
        .enum {
          margin-top: .8em;
          margin-bottom: 1em;
          display: flex;
          flex-basis: 100%;
        }
        span::before {
          content: '—';
          display: inline-block;
          width: 2em;
        }
        div {
          font-size: 1.2em;
        }
        div :global(p) {
          font-size: .7em;
        }
        div :global(p:first-child) {
          margin-top: .7em;
        }
      `}
    </style>
  </div>
);