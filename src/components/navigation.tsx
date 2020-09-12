import React from 'react';

import { Link } from 'gatsby';

const Navigation = () => {
  return (
    <nav className='navbar navbar-default '>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#target'
            aria-expanded='false'
          >
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
        </div>
        <div className='collapse navbar-collapse' id='target'>
          <ul className='nav navbar-nav'>
            <li>
              <Link to={'/'} activeClassName={'active'}>
                Home
              </Link>
            </li>
            <li>
              <Link to={'/about'} activeClassName={'active'}>
                About
              </Link>
            </li>
            <li>
              <Link to={'/blog'} activeClassName={'active'}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
