import Router from 'next/router';

import LeftArrow from '../components/leftArrow.svg';
import RightArrow from '../components/rightArrow.svg';

export default ({ next, prev }) => {
  if (!next || !prev) return null;
   
  return (
    <div>
      <a onClick={ () => Router.push(prev) }>
        <LeftArrow />
      </a>
      <a onClick={ () => Router.push(next) }>
        <RightArrow />
      </a>
      <style jsx>
        {`
          div {
            position: fixed;
            bottom: 10px;
            left: 0;
            right: 0;
            height: 1.4em;
            text-align: center;
          }
          a {
            height: 24px;
            width: 24px;
            display: inline-block;
            padding: 0 6px;
            cursor: pointer;
          }
          a:hover :global(svg) {
            fill: rgba(255,255,255,.9);
          }
          a :global(svg) {
            transform: translate(-7px, -2px);
            vertical-align: middle;
            fill: rgba(255,255,255,.34);
          }
        `}
      </style>
    </div>
  );
};