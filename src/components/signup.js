import React from 'react';

const Signup = () => {
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div class='tab-pane fade show active'>
      <form>
        <div class='form-outline mb-4'>
          <input
            required
            placeholder='Name'
            type='text'
            id='registerName'
            class='form-control'
          />
        </div>

        <div class='form-outline mb-4'>
          <input
            required
            placeholder='Username'
            type='text'
            id='registerUsername'
            class='form-control'
          />
        </div>

        <div class='form-outline mb-4'>
          <input
            required
            placeholder='Email'
            type='email'
            id='registerEmail'
            class='form-control'
          />
        </div>
        <div class='form-outline mb-4'>
          <input
            required
            placeholder='Contact number'
            type='number'
            id='registerphone'
            class='form-control'
          />
        </div>
        <div class='form-outline mb-4'>
          <input
            required
            placeholder='Address'
            type='text'
            id='registerAddress'
            class='form-control'
          />
        </div>

        <div class='form-outline mb-4'>
          <input
            required
            placeholder='Password'
            type='password'
            id='registerPassword'
            class='form-control'
          />
        </div>

        <div class='form-outline mb-4'>
          <input
            required
            placeholder='Repeat Password'
            type='password'
            id='registerRepeatPassword'
            class='form-control'
          />
        </div>

        <div class='form-check d-flex justify-content-start mb-4'>
          <input
            required
            class='form-check-input me-2'
            type='checkbox'
            id='registerCheck'
          />
          <span class='form-check-label' for='registerCheck'>
            I have read and agree to the terms
          </span>
        </div>

        <button
          type='submit'
          onClick={register}
          class='btn btn-primary btn-block mb-3'
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
