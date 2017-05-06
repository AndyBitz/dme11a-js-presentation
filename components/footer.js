import Link from 'next/link';

export default ({ children }) => (
  <footer>
    <Link>
      <a href="https://github.com/AndyBitz/dme11a-js-presentation" target="_blank">source</a>
    </Link>
    <style jsx>
      {`
        footer {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4em;
          padding: 0 4em;
          font-size: .5em;
          font-family: monospace;
        }
      `}
    </style>
  </footer>
);