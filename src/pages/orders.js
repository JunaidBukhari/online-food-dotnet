import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders, getMenu } from "../redux-toolkit/actions";
import { updateOrder } from "../redux-toolkit/actions";
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

  useEffect(() => {
    let newArray = orders.map((o) => {
      return {
        OrderID: o.id,
        amount: o.amount,
        status: o.status,
        paymentMethod: o.paymentMethod,
        Food: requiredfood(o.foodId),
      };
    });

    setArray(newArray);
  }, [orders, menu]);

  console.log(array);
  const requiredfood = (id) => {
    return menu.filter((m) => m.id === id)[0];
  };

  return (
    <div className="container">
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
              <tr>
                <td>{c.OrderID}</td>
                <td>{c.Food?.name}</td>
                <td>
                  <span className="ml-3" style={{ color: "green" }}>
                    {c.amount}
                  </span>
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
                        className="fa"
                        style={{ color: "red", cursor: "pointer" }}
                      >
                        <span style={{ fontSize: "9px" }}>cancel order</span>
                      </i>
                    ) : (
                      c.status == "Delivered" && (
                        <i
                          onClick={() => {}}
                          className="fa"
                          style={{ color: "green", cursor: "pointer" }}
                        >
                          <span style={{ fontSize: "9px" }}>rate order</span>
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
