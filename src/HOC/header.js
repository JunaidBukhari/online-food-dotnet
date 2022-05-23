import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const cart = useSelector((state) => state.data.cart);
  let itemsInCart = cart.reduce((value, obj) => (value = value + obj.item), 0);
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

            <li className='nav-item'>
              <Link to='/contact' className='navbar-brand active'>
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/menu' className='navbar-brand active'>
                Menu
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/cart' className=' btn btn-danger '>
                ORDER NOW
              </Link>
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
            <span className='badge badge-danger'> {itemsInCart} </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
