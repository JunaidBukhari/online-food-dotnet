import React, { useState } from 'react';
import Login from '../components/login';
import Signup from '../components/signup';
const Auth = () => {
  const [tab, setTab] = useState('Login');
  return (
    <div
      style={{ backgroundColor: 'rgb(255 255 255 / 70%)' }}
      className="mt-5 container p-5 d-flex justify-content-center"
    >
      <div className="col-xl-8 col-lg-8 col-md-12">
        <ul
          className="nav nav-pills nav-justified mb-3"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <span
              onClick={() => setTab('Login')}
              style={{ cursor: 'pointer' }}
              className={`nav-link ${tab === 'Login' && 'active'}`}
            >
              Login
            </span>
          </li>
          <li className="nav-item" role="presentation">
            <span
              onClick={() => setTab('Register')}
              style={{ cursor: 'pointer' }}
              className={`nav-link ${tab === 'Register' && 'active'}`}
            >
              Register
            </span>
          </li>
        </ul>
        <div className="tab-content">
          {tab === 'Login' ? (
            <Login setTab={setTab} />
          ) : (
            <Signup setTab={setTab} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
