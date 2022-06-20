import axios from 'axios';
import { setMenu, setUser } from './dataSlice';
import { serverRoutes } from './../constants/serverRoutes';
import toast from 'react-hot-toast';
export const getMenu = (setLoading) => (dispatch) => {
  axios
    .get(serverRoutes.GET_MENU)
    .then((res) => {
      dispatch(setMenu(res.data));
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
    });
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
