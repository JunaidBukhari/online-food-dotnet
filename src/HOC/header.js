import React from 'react';

const Header = () => {
  return (
    <nav id='home' class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div class='container-fluid'>
        <a class='navbar-brand' href='http://localhost/project/project.php'>
          MY ONLINE FOOD
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item'>
              <a
                class='nav-link active'
                aria-current='page'
                href='http://localhost/project/project.php'
              >
                Home
              </a>
            </li>
            <li class='nav-item'>
              <a
                class='nav-link active'
                href='http://localhost/project/services.php'
              >
                Services
              </a>
            </li>
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle active'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                More
              </a>
              <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <a
                    class='dropdown-item'
                    href='http://localhost/project/contact.php'
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    class='dropdown-item'
                    href='http://localhost/project/menu.php'
                  >
                    Menu
                  </a>
                </li>
              </ul>
            </li>
            <li class='nav-item'>
              <a
                class=' btn btn-danger '
                aria-current='page'
                href='http://localhost/project/addorder.php'
              >
                ORDER NOW
              </a>
            </li>
          </ul>

          <a
            class='btn btn-warning mr-5'
            href='http://localhost/project/admin.php'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              class='bi bi-lock'
              viewBox='0 0 16 16'
            >
              <path d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z' />
            </svg>{' '}
            ADMIN
          </a>
          <a
            href='http://localhost/project/addorder.php'
            class='btn text-light'
          >
            <i class='fa p-2' style={{ fontSize: '24px' }}>
              &#xf07a;
            </i>
            <span className='badge badge-danger'> 5 </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
