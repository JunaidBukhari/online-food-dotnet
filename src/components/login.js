import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux-toolkit/actions';
const Login = ({ setTab }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = [
    {
      username: 'f2020027035@umt.edu.pk',
      password: '123456',
      title: 'Junaid Bukhari',
    },
    {
      username: 'f2020027031@umt.edu.pk',
      password: '123456',
      title: 'Nouman Saifi',
    },
    {
      username: 'f2020027022@umt.edu.pk',
      password: '123456',
      title: 'Hasnat Ali',
    },
    {
      username: 'f2020027003@umt.edu.pk',
      password: '123456',
      title: 'Usman Ansari',
    },
    {
      username: 'f2020027012@umt.edu.pk',
      password: '123456',
      title: 'Nouman Akram',
    },
  ];
  const [user, setUser] = useState({ email: '', password: '' });
  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(user, setLogin));
  };
  const setLogin = (u) => {
    localStorage.setItem('isAuthenticated', true);
    localStorage.setItem('user', JSON.stringify(u));
    navigate('/');
    toast.success('Logged in Successfully');
  };
  return (
    <div className="tab-pane fade show active">
      <form onSubmit={login}>
        <div className="form-outline mb-4">
          <input
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
            name="email"
            type="email"
            id="loginName"
            className="form-control"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
            type="password"
            name="password"
            id="loginPassword"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member?
            <span
              style={{
                cursor: 'pointer',
                color: '#007BFF',
                marginLeft: '5px',
              }}
              onClick={() => setTab('Register')}
            >
              Register
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
