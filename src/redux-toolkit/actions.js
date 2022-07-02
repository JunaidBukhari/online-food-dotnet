import axios from "axios";
import { setMenu, setUser, addToCart, setOrders } from "./dataSlice";
import { serverRoutes } from "./../constants/serverRoutes";
import toast from "react-hot-toast";
export const getMenu = (setLoading) => (dispatch) => {
  axios
    .get(serverRoutes.GET_MENU)
    .then((res) => {
      dispatch(setMenu(res.data));
      setLoading && setLoading(false);
    })
    .catch((err) => {
      setLoading && setLoading(false);
    });
};

export const getCart = (userId) => (dispatch) => {
  axios
    .get(`${serverRoutes.GET_CART}/${userId}`)
    .then((res) => dispatch(addToCart(res.data)));
};

export const getOrders = (userId) => (dispatch) => {
  axios
    .get(`${serverRoutes.GET_ORDERS}/${userId}`)
    .then((res) => dispatch(setOrders(res.data)));
};

export const sendOrders = (body, id, user) => (dispatch) => {
  console.log("BODY", body);
  axios
    .post(`${serverRoutes.SEND_ORDERS}`, body)
    .then((res) => dispatch(DeleteCart(id, body.userId)))
    .then((res) => dispatch(userOrdersUpdate(user)));
};

export const addToCartorUpdate = (body) => (dispatch) => {
  axios
    .post(serverRoutes.ADD_TO_CART, body)
    .then((res) => dispatch(getCart(body.userId)));
};

export const updateOrder = (body, id) => (dispatch) => {
  axios.post(serverRoutes.UPDATE_ORDERS, body).then((res) => {
    dispatch(getOrders(id));
  });
};

export const rateFood = (body, id) => (dispatch) => {
  axios
    .post(serverRoutes.RATE_FOOD, body)
    .then((res) => {
      toast.success("Thank you For Rating");
    })
    .then((a) => {});
};

export const DeleteCart = (cartId, userId) => (dispatch) => {
  axios
    .delete(`${serverRoutes.DETELE_CART}/${cartId}`)
    .then((res) => dispatch(getCart(userId)));
};

export const loginUser = (body, setLogin) => (dispatch) => {
  axios.post(serverRoutes.LOGIN, body).then((res) => {
    if (res.status === 200) {
      dispatch(setUser(res.data));
      setLogin(res.data);
    } else {
      toast.error("Email or Password is not correct");
    }
  });
};

export const userOrdersUpdate = (body) => (dispatch) => {
  axios.post(serverRoutes.USER_ORDERS, body).then((res) => {});
};

export const signupUser = (body, setLogin) => (dispatch) => {
  axios.post(serverRoutes.SIGN_UP, body).then((res) => {
    setLogin();
  });
};
