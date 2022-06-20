import axios from 'axios';
import { setMenu, setUser, addToCart } from './dataSlice';
import { serverRoutes } from './../constants/serverRoutes';
import toast from 'react-hot-toast';
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

export const addToCartorUpdate = (body) => (dispatch) => {
  axios
    .post(serverRoutes.ADD_TO_CART, body)
    .then((res) => dispatch(getCart(body.userId)));
};

export const loginUser = (body, setLogin) => (dispatch) => {
  axios.post(serverRoutes.LOGIN, body).then((res) => {
    if (res.status === 200) {
      dispatch(setUser(res.data));
      setLogin(res.data);
    } else {
      toast.error('Email or Password is not correct');
    }
  });
};

export const signupUser = (body, setLogin) => (dispatch) => {
  axios.post(serverRoutes.SIGN_UP, body).then((res) => {
    setLogin();
  });
};
