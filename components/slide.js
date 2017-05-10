import Router from 'next/router';

export default ({ children, socket }) => (
  <section>
    <article>
      { children }
    </article>
    <style jsx>
      {`
        section {
          width: 100%;
          height: 100%;
        }
        article :global(a) {
          margin: 0 6px;
          font-size: .8em;
        }
        article {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 10;
        }
      `}
    </style>
  </section>
);