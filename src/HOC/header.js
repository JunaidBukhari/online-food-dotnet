import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setUser } from '../redux-toolkit/dataSlice';
import { useDispatch } from 'react-redux';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onRefresh();
  }, []);
  const cart = useSelector((state) => state.data.cart);
  const user = useSelector((state) => state.data.loggedInUser);
  let itemsInCart = cart.reduce((value, obj) => (value = value + obj.item), 0);
  const logout = () => {
    localStorage.clear();
    toast.success('Logout Success');
    navigate('/login');
    dispatch(setUser({}));
  };
  const onRefresh = () => {
    if (localStorage.getItem('user')) {
      dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
    }
  };
  return (
    <div id="home" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          MY ONLINE FOOD
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/services" className="navbar-brand active">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="navbar-brand active">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="navbar-brand active">
                Menu
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/cart" className=" btn btn-danger ">
                ORDER NOW
              </Link>
            </li>
          </ul>
          {user.name && (
            <span className="navbar-brand active  badge-lg">
              Welcome {user.name?.toUpperCase()}
            </span>
          )}

          {localStorage.getItem('isAuthenticated') && (
            <button onClick={logout} className="btn btn-warning">
              Logout
            </button>
          )}
          <Link
            to="/cart"
            href="http://localhost/project/addorder.php"
            className="btn text-light"
          >
            <i className="fa p-2" style={{ fontSize: '24px' }}>
              &#xf07a;
            </i>
            <span className="badge badge-danger"> {itemsInCart} </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
