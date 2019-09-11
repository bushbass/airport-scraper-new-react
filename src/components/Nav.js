import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/scraper'>Scraper</Link>
        </li>
        <li>
          <Link to='/'>Intro page</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
