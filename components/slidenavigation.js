import Router from 'next/router';

import LeftArrow from '../components/leftArrow.svg';
import RightArrow from '../components/rightArrow.svg';

export default ({ next, prev }) => {
  if (!next || !prev) return null;
   
  return (
    <div>
      <a onClick={ () => Router.push(next) }>
        <LeftArrow />
      </a>
      <a onClick={ () => Router.push(prev) }>
        <RightArrow />
      </a>
      <style jsx>
        {`
          div {
            position: fixed;
            bottom: 0;
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
          }
          a:hover svg {
            fill: rgba(255,255,255,.9);
          }
          svg {
            vertical-align: middle;
            fill: rgba(255,255,255,.54);
          }
        `}
      </style>
    </div>
  );
};