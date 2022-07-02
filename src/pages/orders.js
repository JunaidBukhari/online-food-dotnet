import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders, getMenu } from "../redux-toolkit/actions";
import { updateOrder } from "../redux-toolkit/actions";
import RateFood from "../components/RateFood";
import { rateFood } from "../redux-toolkit/actions";
const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.data.orders);
  const user = useSelector((state) => state.data.loggedInUser);
  const menu = useSelector((state) => state.data.menu);

  useEffect(() => {
    dispatch(getOrders(user.id));
    dispatch(getMenu());
  }, [user]);

  const [array, setArray] = useState([]);
  const [show, setShow] = useState(false);
  const [food, setFood] = useState({});
  const [order, setOrder] = useState({});
  useEffect(() => {
    let newArray = orders.map((o) => {
      return {
        OrderID: o.id,
        amount: o.amount,
        status: o.status,
        rated: o.rated,
        paymentMethod: o.paymentMethod,
        Food: requiredfood(o.foodId),
      };
    });

    setArray(newArray);
  }, [orders, menu]);
  const orderRating = (b) => {
    dispatch(rateFood(b));
    dispatch(updateOrder({ ...order, rated: true }, user.id));
    setShow(false);
  };

  const requiredfood = (id) => {
    return menu.filter((m) => m.id === id)[0];
  };
  return (
    <div className="container">
      {show && (
        <RateFood
          orderRating={orderRating}
          show={show}
          setShow={setShow}
          food={food}
        />
      )}
      <div className="mt-5">
        <table className="table bg-light">
          <thead style={{ color: "white", backgroundColor: "#343A40" }}>
            <tr>
              <td>Order ID</td>
              <td>Item Name</td>
              <td>Amount</td>
              <td>Price</td>
              <td>Payment Method</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {array.map((c) => (
              <tr
                style={{
                  backgroundColor:
                    c.status === "Pending"
                      ? "#6495ED"
                      : c.status === "Delivered"
                      ? "#76B947"
                      : c.status === "Canceled"
                      ? "#E34234"
                      : "",
                  color:
                    c.status === "Pending"
                      ? "white"
                      : c.status === "Delivered"
                      ? "white"
                      : c.status === "Canceled"
                      ? "white"
                      : "",
                }}
              >
                <td>{c.OrderID}</td>
                <td>{c.Food?.name}</td>
                <td>
                  <span className="ml-3">{c.amount}</span>
                </td>

                <td>Rs {c.amount * c.Food?.price}</td>
                <td>{c.paymentMethod}</td>
                <td>{c.status}</td>
                <td>
                  <div className="d-flex">
                    {c.status == "Pending" ? (
                      <i
                        onClick={() => {
                          let order = orders.filter(
                            (o) => o.id === c.OrderID
                          )[0];
                          dispatch(
                            updateOrder(
                              { ...order, status: "Canceled" },
                              user.id
                            )
                          );
                        }}
                        className="btn btn-danger"
                      >
                        <span>cancel order</span>
                      </i>
                    ) : (
                      c.status == "Delivered" &&
                      c.rated == false && (
                        <i
                          onClick={() => {
                            let order = orders.filter(
                              (o) => o.id === c.OrderID
                            )[0];
                            setOrder(order);
                            setFood(c.Food);
                            setShow(true);
                          }}
                          className="btn btn-primary"
                        >
                          <span>rate order</span>
                        </i>
                      )
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
