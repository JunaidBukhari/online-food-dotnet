import React, { useState } from 'react';

const Auth = () => {
  const [tab, setTab] = useState('Login');
  return (
    <div
      style={{ backgroundColor: 'rgb(255 255 255 / 70%)' }}
      className='mt-5 container p-5 d-flex justify-content-center'
    >
      <div className='col-xl-8 col-lg-8 col-md-12'>
        <ul class='nav nav-pills nav-justified mb-3' id='ex1' role='tablist'>
          <li class='nav-item' role='presentation'>
            <span
              onClick={() => setTab('Login')}
              style={{ cursor: 'pointer' }}
              class={`nav-link ${tab === 'Login' && 'active'}`}
            >
              Login
            </span>
          </li>
          <li class='nav-item' role='presentation'>
            <span
              onClick={() => setTab('Register')}
              style={{ cursor: 'pointer' }}
              class={`nav-link ${tab === 'Register' && 'active'}`}
            >
              Register
            </span>
          </li>
        </ul>
        <div class='tab-content'>
          {tab === 'Login' ? (
            <div class='tab-pane fade show active'>
              <form>
                <div class='form-outline mb-4'>
                  <input
                    placeholder='Email or Username'
                    type='email'
                    id='loginName'
                    class='form-control'
                  />
                </div>

                <div class='form-outline mb-4'>
                  <input
                    placeholder='Password'
                    type='password'
                    id='loginPassword'
                    class='form-control'
                  />
                </div>

                <div class='row mb-4'>
                  <div class='col-md-6 d-flex justify-content-center'>
                    <div class='form-check mb-3 mb-md-0'>
                      <input
                        class='form-check-input'
                        type='checkbox'
                        value=''
                        id='loginCheck'
                        checked
                      />
                      <label class='form-check-label' for='loginCheck'>
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div class='col-md-6 d-flex justify-content-center'>
                    <a href='#!'>Forgot password?</a>
                  </div>
                </div>

                <button type='submit' class='btn btn-primary btn-block mb-4'>
                  Sign in
                </button>

                <div class='text-center'>
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
          ) : (
            <div class='tab-pane fade show active'>
              <form>
                <div class='form-outline mb-4'>
                  <input
                    placeholder='Name'
                    type='text'
                    id='registerName'
                    class='form-control'
                  />
                </div>

                <div class='form-outline mb-4'>
                  <input
                    placeholder='Username'
                    type='text'
                    id='registerUsername'
                    class='form-control'
                  />
                </div>

                <div class='form-outline mb-4'>
                  <input
                    placeholder='Email'
                    type='email'
                    id='registerEmail'
                    class='form-control'
                  />
                </div>

                <div class='form-outline mb-4'>
                  <input
                    placeholder='Password'
                    type='password'
                    id='registerPassword'
                    class='form-control'
                  />
                </div>

                <div class='form-outline mb-4'>
                  <input
                    placeholder='Repeat Password'
                    type='password'
                    id='registerRepeatPassword'
                    class='form-control'
                  />
                </div>

                <div class='form-check d-flex justify-content-center mb-4'>
                  <input
                    class='form-check-input me-2'
                    type='checkbox'
                    value=''
                    id='registerCheck'
                    checked
                    aria-describedby='registerCheckHelpText'
                  />
                  <span class='form-check-label' for='registerCheck'>
                    I have read and agree to the terms
                  </span>
                </div>

                <button type='submit' class='btn btn-primary btn-block mb-3'>
                  Sign in
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
