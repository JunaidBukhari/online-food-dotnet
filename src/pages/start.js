import React from 'react';
import { Link } from 'react-router-dom';
const Start = () => {
  return (
    <div class='container'>
      <div class='row'>
        <div class='row justify-content-center'>
          <Link id='centered' to='/menu' className='btn btn-danger '>
            MENU
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
