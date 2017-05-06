export default ({ children }) => (
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