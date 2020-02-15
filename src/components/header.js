import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Link
        to='/writing/'
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Writing
      </Link>
      <Link
        to='/about/'
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        About
      </Link>
      <Link
        to='/work/'
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Work
      </Link>
    </div>
  </header>
);

export default Header;
