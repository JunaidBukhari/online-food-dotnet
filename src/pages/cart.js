import React from 'react';
import MyTable from '../components/table';
const Cart = () => {
  return (
    <div className='container'>
      <MyTable />
      <button class='btn btn-success mt-3'>CONFIRM ORDER</button>
    </div>
  );
};

export default Cart;
