import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div id='home' className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          MY ONLINE FOOD
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/services' className='navbar-brand active'>
                Services
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle active'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                More
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <Link to='/contact' className='dropdown-item'>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to='/menu' className='dropdown-item'>
                    Menu
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a
                className=' btn btn-danger '
                aria-current='page'
                href='http://localhost/project/addorder.php'
              >
                ORDER NOW
              </a>
            </li>
          </ul>

          <Link className='btn btn-info mr-5' to='/login'>
            Login / Sign Up
          </Link>
          <Link
            to='/cart'
            href='http://localhost/project/addorder.php'
            className='btn text-light'
          >
            <i className='fa p-2' style={{ fontSize: '24px' }}>
              &#xf07a;
            </i>
            <span className='badge badge-danger'> 5 </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
