export default ({ children }) => (
  <div>
    { children }
    <style jsx>
      {`
        div {
          width: 45%;
          flex-basis: 45%;
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
        }
        div :global(div) {
          max-width: 100%;
        }
      `}
    </style>
  </div>
);