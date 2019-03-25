import React from 'react';

import { Link } from 'gatsby';

class Menu extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to={`/`} className="selected">
            Home
          </Link>
        </li>
        <li>
          <Link to={`/about`}>
            About
          </Link>
        </li>
        <li>
          <Link to={`/blog`}>
            Blog
          </Link>
        </li>
        <li>
          <Link to={`/contact`}>
            Contact
          </Link>
        </li>
      </ul>
    );
  }
}

export default Menu;