import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0 1rem`,
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

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
