import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import Navigation from './Navigation';

/**
 * Header component
 * @return {string}
 */
function Header() {
  return (
    <header className='header'>
      <div className='wrapper'>
        <div className='headerBody'>
          {/* logo */}
          <Link to='/' className='headerLogo'>
            H
            <span>W</span>
          </Link>

          {/* navigation */}
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
