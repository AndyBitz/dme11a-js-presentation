import Head from 'next/head';

export default ({ children }) => (
  <main>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i" rel="stylesheet" />
    </Head>
    <style jsx global>
      {`
        * {
          box-sizing: border-box;
        }
        ::selection {
          color: #000;
          background-color: #f7df1e;
        }
        html, body {
          margin: 0;
          background-color: #000;
          width: 100vw;
          height: 100vh;
          color: rgba(255,255,255,.54);
          font-family: 'Noto Sans', sans-serif;
          font-size: 26px;
        }
        main {
          height: 100vh;
          width: 100vw;
        }
        img {
          max-width: 100%;
          vertical-aling: middle;
        }
        p {
          margin-top: .3em;
          margin-bottom: .7em;
        }
        a {
          text-decoration: none;
          display: inline-block;
          color: rgba(255,255,255,.54);
        }
        a:hover {
          color: rgba(255,255,255,.90);
        }
      `}
    </style>
    { children }
  </main>
);