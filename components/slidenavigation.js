import Router from 'next/router';

import LeftArrow from '../components/leftArrow';
import RightArrow from '../components/rightArrow';

export default ({ next, prev, socket, role }) => {
  if (!next || !prev) return null;
   
  return (
    <div>
      <a onClick={ () => {
        console.log('should emit');
        console.log(socket, role);
        if (socket && role === 'HOST')
          socket.emit('host-slide-update', { url: prev });
        Router.push(prev);
      } }>
        <LeftArrow />
      </a>
      <a onClick={ () => {
        console.log('should emit');
        console.log(socket, role);
        if (socket && role === 'HOST')
          socket.emit('host-slide-update', { url: next });
        Router.push(next);
      } }>
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