import Head from 'next/head';

export default ({ children }) => (
  <Head>
    <title>{ children }</title>
  </Head>
);