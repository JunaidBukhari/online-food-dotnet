import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { signupUser } from '../redux-toolkit/actions';

const Signup = (props) => {
  const dispatch = useDispatch();
  const [body, setBody] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    password: '',
    orders: 0,
    password2: '',
  });
  const register = (e) => {
    e.preventDefault();
    if (body.password !== body.password2) {
      toast.error('Password do not match');
    } else {
      dispatch(signupUser(body, setLogin));
    }
  };
  const setLogin = () => {
    props.setTab('Login');
    toast.success('Sign Up is Complete, Please Login to continue ');
  };
  const onChange = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };
  return (
    <div className="tab-pane fade show active">
      <form onSubmit={register}>
        <div className="form-outline mb-4">
          <input
            required
            placeholder="Name"
            type="text"
            id="registerName"
            className="form-control"
            name="name"
            value={body.name}
            onChange={onChange}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            required
            placeholder="Email"
            type="email"
            id="registerEmail"
            className="form-control"
            name="email"
            value={body.email}
            onChange={onChange}
          />
        </div>
        <div className="form-outline mb-4">
          <input
            required
            placeholder="Contact number"
            type="text"
            id="registerphone"
            className="form-control"
            name="phone"
            value={body.phone}
            onChange={onChange}
          />
        </div>
        <div className="form-outline mb-4">
          <input
            required
            placeholder="Address"
            type="text"
            id="registerAddress"
            className="form-control"
            name="address"
            value={body.address}
            onChange={onChange}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            required
            placeholder="Password"
            type="password"
            id="registerPassword"
            className="form-control"
            name="password"
            value={body.password}
            onChange={onChange}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            required
            placeholder="Repeat Password"
            type="password"
            id="registerRepeatPassword"
            className="form-control"
            name="password2"
            value={body.password2}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-3">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
