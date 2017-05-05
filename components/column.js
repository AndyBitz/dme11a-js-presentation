export default ({ children }) => (
  <div>
    { children }
    <style jsx>
      {`
        div {
          width: 45%;
          flex-basis: 45%;
        }
      `}
    </style>
  </div>
);