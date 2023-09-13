import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar({ dogs }) {
  const dogLinks = dogs.map((dog) => (
    <li className='nav-item' key={dog.name}>
      <NavLink to={`/dogs/${dog.name}`} className='nav-link'>
        {dog.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div class='container-fluid'>
        <Link className='navbar-brand' to='/dogs'>
          Dog App
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink to='/dogs' end className='nav-link'>
                Home
              </NavLink>
            </li>
            {dogLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
