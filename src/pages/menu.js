import axios from 'axios';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux-toolkit/dataSlice';
const Menu = () => {
  useEffect(() => {
    axios
      .get('https://localhost:7032/api/Food')
      .then((res) => console.log(res));
  }, []);
  const data = useSelector((state) => state.data.menu);

  const cart = useSelector((state) => state.data.cart);
  const dispatch = useDispatch();
  const additemtoCart = (d) => {
    if (cart.filter((c) => c.id === d.id).length) {
      let newCart = [...cart];
      let obj = newCart.filter((c) => c.id === d.id)?.[0];
      let number = obj.item;
      let newObj = { ...obj, item: ++number };
      let index = newCart.indexOf(obj);
      newCart[index] = newObj;
      toast.success(`you have now ${newObj.item} ${d.title}`);
      dispatch(addToCart(newCart));
    } else {
      const data = [...cart, { ...d, item: 1 }];
      dispatch(addToCart(data));
      toast.success(`${d.title} is Added to cart`);
    }
  };
  return (
    <div className="container ">
      <div
        style={{ marginBottom: '100px' }}
        className="row d-flex justify-content-center"
      >
        {data?.map((d) => (
          <div
            style={{
              maxWidth: '350px',
              minWidth: '350px',
            }}
            key={d.id}
            className="col col-lg-6 col-xl-4 col-md-12 mt-4"
          >
            <img
              className="card-img-top"
              height={230}
              src={d.image}
              alt="Card image cap"
            />
            <div
              style={{
                maxHeight: '120px',
                minHeight: '120px',
                backgroundColor: 'white',
              }}
              className="card-body"
            >
              <span
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <h5 className="text-dark">{d.title}</h5>
                <h5 style={{ color: 'green' }}>Rs.{d.price}</h5>
              </span>
              <button
                style={{ position: 'absolute', bottom: '5px' }}
                className="btn btn-success"
                onClick={() => additemtoCart(d)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
