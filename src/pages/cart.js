import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCartorUpdate,
  DeleteCart,
  getCart,
  getMenu,
} from "../redux-toolkit/actions";
import Confirmation from "../components/confirmation";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.data.cart);
  const food = useSelector((state) => state.data.menu);
  const user = useSelector((state) => state.data.loggedInUser);
  useEffect(() => {
    if (user.id) {
      dispatch(getMenu(null));
      dispatch(getCart(user.id));
    }
  }, [user]);
  const increment = (d) => {
    let newCart = [...cart];
    let obj = newCart.filter((c) => c.id === d.id)?.[0];
    let number = obj.item;
    let newObj = { ...obj, item: ++number };
    let index = newCart.indexOf(obj);
    newCart[index] = newObj;
    dispatch(addToCartorUpdate(newCart[index]));
  };
  const decrement = (d) => {
    let newCart = [...cart];
    let obj = newCart.filter((c) => c.id === d.id)?.[0];
    let index = newCart.indexOf(obj);
    let number = obj.item;
    let newObj = { ...obj, item: --number };
    newCart[index] = newObj;
    dispatch(addToCartorUpdate(newCart[index]));
  };
  const handleDelete = (d) => {
    console.log(d);
    if (window.confirm("Are You Sure you want to Delete !")) {
      dispatch(DeleteCart(d.id, d.userId));
    }
  };

  const getFoodForCart = (id) => {
    return food.filter((f) => f.id === id)?.[0];
  };
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      {<Confirmation show={show} setShow={setShow} cart={cart} />}
      <div className="mt-5">
        <table className="table bg-light">
          <thead style={{ color: "white", backgroundColor: "#343A40" }}>
            <tr>
              <td>Sr. No</td>
              <td>Name</td>
              <td>Amount</td>
              <td>Price</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((c, index) => (
              <tr className="">
                <td>{index + 1}</td>
                <td>{getFoodForCart(c.foodId)?.name}</td>
                <td>
                  <span
                    onClick={() => increment(c)}
                    className="btn btn-sm btn-success mr-2 pb-1 pt-1"
                  >
                    +
                  </span>

                  <span
                    onClick={() => decrement(c)}
                    className="btn btn-sm btn-danger pb-1 pt-1"
                  >
                    -
                  </span>
                  <span className="badge badge-info ml-3">{c.item}</span>
                </td>

                <td>Rs {c.item * getFoodForCart(c.foodId)?.price}</td>
                <td>
                  <i
                    onClick={() => handleDelete(c)}
                    className="fa fa-trash"
                    style={{ color: "red", cursor: "pointer" }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {cart.length ? (
        <button onClick={() => setShow(true)} className="btn btn-success mt-3">
          {cart.length ? "CONFIRM ORDER" : "Add something to cart"}
        </button>
      ) : (
        <Link className="btn btn-success" to="/menu">
          Add something to cart
        </Link>
      )}
    </div>
  );
};

export default Cart;
