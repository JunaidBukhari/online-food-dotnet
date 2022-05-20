import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div id='home' className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link to='/login' className='navbar-brand'>
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
              <Link to='/home' className='navbar-brand'>
                Home
              </Link>
            </li>
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

          <a
            className='btn btn-warning mr-5'
            href='http://localhost/project/admin.php'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-lock'
              viewBox='0 0 16 16'
            >
              <path d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z' />
            </svg>{' '}
            ADMIN
          </a>
          <a
            href='http://localhost/project/addorder.php'
            className='btn text-light'
          >
            <i className='fa p-2' style={{ fontSize: '24px' }}>
              &#xf07a;
            </i>
            <span className='badge badge-danger'> 5 </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
