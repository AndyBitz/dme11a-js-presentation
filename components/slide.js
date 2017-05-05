import { Component } from 'react';

import Layout from './layout.js';

export default ({ children }) => {
  return (
    <Layout>
      <article>
        { children }
      </article>
      <style jsx>
        {`
          article {
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
            justify-content: space-between;
            height: 100%;
            width: 100%;
            max-width: 1920px;
            margin: auto;
            padding: 2em 4em;
            overflow-x: hidden;
            overflow-y: auto;
          }
        `}
      </style>
    </Layout>
  );
}