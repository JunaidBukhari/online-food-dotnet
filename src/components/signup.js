import React from 'react';

const Signup = () => {
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className='tab-pane fade show active'>
      <form>
        <div className='form-outline mb-4'>
          <input
            required
            placeholder='Name'
            type='text'
            id='registerName'
            className='form-control'
          />
        </div>

        <div className='form-outline mb-4'>
          <input
            required
            placeholder='Username'
            type='text'
            id='registerUsername'
            className='form-control'
          />
        </div>

        <div className='form-outline mb-4'>
          <input
            required
            placeholder='Email'
            type='email'
            id='registerEmail'
            className='form-control'
          />
        </div>
        <div className='form-outline mb-4'>
          <input
            required
            placeholder='Contact number'
            type='number'
            id='registerphone'
            className='form-control'
          />
        </div>
        <div className='form-outline mb-4'>
          <input
            required
            placeholder='Address'
            type='text'
            id='registerAddress'
            className='form-control'
          />
        </div>

        <div className='form-outline mb-4'>
          <input
            required
            placeholder='Password'
            type='password'
            id='registerPassword'
            className='form-control'
          />
        </div>

        <div className='form-outline mb-4'>
          <input
            required
            placeholder='Repeat Password'
            type='password'
            id='registerRepeatPassword'
            className='form-control'
          />
        </div>

        <div className='form-check d-flex justify-content-start mb-4'>
          <input
            required
            className='form-check-input me-2'
            type='checkbox'
            id='registerCheck'
          />
          <span className='form-check-label' for='registerCheck'>
            I have read and agree to the terms
          </span>
        </div>

        <button
          disabled
          type='submit'
          onClick={register}
          className='btn btn-primary btn-block mb-3'
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
