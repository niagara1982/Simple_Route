import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

/**
 * Navigation component
 * @return {string}
 */
function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const openNavigation = () => setOpen(!open);

  return (
    <div>
      <nav className='nav' role='navigation'>
        <ul className={open ? 'visible' : ''}>
          <li>
            <Link to='/Simple_Route' className={`navLink ${location.pathname === '/' ? 'active' : ''}`}>Головна</Link>
          </li>
          <li>
            <Link
              to='/Simple_Route/about'
              className={`navLink ${
                            location.pathname === '/about' ? 'active' : ''
              }`}
            >
                            About
            </Link>
          </li>
          <li>
            <Link
              to='/Simple_Route/services'
              className={`navLink ${
              location.pathname === '/services' ? 'active' : ''
              }`}
            >
                            Services
            </Link>
          </li>
          <li>
            <Link
              to='/Simple_Route/portfolio'
              className={`navLink ${
              location.pathname === '/portfolio' ? 'active' : ''
              }`}
            >
                            Portfolio
            </Link>
          </li>
        </ul>
      </nav>

      <button
        type='button'
        className={open ? 'burgerNav open' : 'burgerNav'}
        onClick={openNavigation}
      >
        <span className='burgerLine'></span>
      </button>
    </div>
  );
}

export default Navigation;
