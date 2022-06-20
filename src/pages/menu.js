import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartorUpdate, getCart, getMenu } from '../redux-toolkit/actions';
import RatingStars from '../components/ratings';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.data.menu);
  const cart = useSelector((state) => state.data.cart);
  const user = useSelector((state) => state.data.loggedInUser);
  useEffect(() => {
    if (user.id) {
      dispatch(getMenu(setLoading));
      dispatch(getCart(user.id));
    }
  }, [user]);
  const addtoCart = (d) => {
    console.log(d, user, cart);
    const body = {
      userId: user.id,
      foodId: d.id,
      item: 1,
    };
    dispatch(addToCartorUpdate(body));
  };
  return (
    <div className="container ">
      <div
        style={{ marginBottom: '100px' }}
        className="row d-flex justify-content-center"
      >
        {!loading && data.length === 0 && (
          <h2
            style={{
              maxWidth: '350px',
              minWidth: '350px',
            }}
            className="col col-lg-6 col-xl-4 col-md-12 mt-4"
          >
            Nothing in Menu
          </h2>
        )}
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
              {<RatingStars rating={d.rating} />}
              <span
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <h5 className="text-dark">{d.name}</h5>
                <h5 style={{ color: 'green' }}>Rs.{d.price}</h5>
              </span>
              {cart.filter((c) => c.foodId === d.id).length === 0 ? (
                <button
                  style={{ position: 'absolute', bottom: '5px' }}
                  className="btn btn-success"
                  onClick={() => addtoCart(d)}
                >
                  ADD TO CART
                </button>
              ) : (
                <button
                  style={{ position: 'absolute', bottom: '5px' }}
                  className="btn btn-success"
                  onClick={() => navigate('/cart')}
                >
                  GO TO CART
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
