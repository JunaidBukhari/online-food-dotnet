import axios from 'axios';
import { setMenu } from './dataSlice';
import { serverUrl } from './../constants/serverRoutes';
export const getMenu = (setLoading) => (dispatch) => {
  axios
    .get(serverUrl)
    .then((res) => {
      dispatch(setMenu(res.data));
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
    });
};
