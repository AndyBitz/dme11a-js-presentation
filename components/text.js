import Head from 'next/head';

export const Column = ({ children }) => (
  <div>
    { children }
    <style jsx>
      {`
        div {
          width: 45%;
          float: left;
        }
        div :global(div) {
          max-width: 100%;
        }
      `}
    </style>
  </div>
);

export const Enum = ({ children }) => (
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

export const Headline = ({ children }) => (
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

export const Title = ({ children }) => (
  <Head>
    <title>{ children }</title>
  </Head>
);