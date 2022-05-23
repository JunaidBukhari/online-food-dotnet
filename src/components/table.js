import * as React from 'react';
const MyTable = (props) => {
  const { data } = props;
  return (
    <div className='mt-5'>
      <ul style={{ border: 'none', background: 'black' }} class='list-group'>
        <li class='list-group-item d-flex justify-content-between align-items-center'>
          Name
          <div>
            <span>Amount</span>
          </div>
          <div>
            <span>Price</span>
          </div>
          <div>
            <span>Action</span>
          </div>
        </li>
      </ul>
      <ul class='list-group'>
        <li class='list-group-item d-flex justify-content-between align-items-center'>
          zinger
          <div>
            <span class='btn btn-sm btn-success mr-2 pt-0'>+</span>
            <span class='btn btn-sm btn-danger pt-0'>-</span>
            <span class='badge badge-info ml-2'>1</span>
          </div>
          <div>Rs 500</div>
          <div>
            <i class='fa fa-trash' style={{ color: 'red' }}></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MyTable;
