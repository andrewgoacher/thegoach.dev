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
            <NavLink to={'/'}>
              Home
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

interface LinkProps {
  to: string;
  children: string;
}

const NavLink = ({to, children}: LinkProps) => {
  return <li>
    <Link to={to} activeClassName={'active'}>
      {children}
    </Link>
  </li>
}