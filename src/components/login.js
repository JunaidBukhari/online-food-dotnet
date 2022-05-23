import React from 'react';

const Login = ({ setTab }) => {
  return (
    <div class='tab-pane fade show active'>
      <form>
        <div class='form-outline mb-4'>
          <input
            required
            placeholder='Email or Username'
            type='email'
            id='loginName'
            class='form-control'
          />
        </div>

        <div class='form-outline mb-4'>
          <input
            required
            placeholder='Password'
            type='password'
            id='loginPassword'
            class='form-control'
          />
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
  );
};

export default Login;
