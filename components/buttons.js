import Link from 'next/link';

export default ({ prev, next }) => {
  if (prev && next) { 
    return (
      <div>
        <Link href={prev}><a>
          <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
            <path d="M0-.5h24v24H0z" fill="none"/>
          </svg>
        </a></Link>
        <Link href={next}><a>
          <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
            <path d="M0-.25h24v24H0z" fill="none"/>
          </svg>
        </a></Link>
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
  } else {
    return null;
  }
}