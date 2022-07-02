export const serverUrl = "https://localhost:7032/api";
export const serverRoutes = {
  GET_MENU: `${serverUrl}/food`,
  LOGIN: `${serverUrl}/user/login`,
  SIGN_UP: `${serverUrl}/user/signup`,
  ADD_TO_CART: `${serverUrl}/cart`,
  GET_CART: `${serverUrl}/cart`, //user id
  DETELE_CART: `${serverUrl}/cart`, //cart id
  GET_ORDERS: `${serverUrl}/orders`, //cart id
  SEND_ORDERS: `${serverUrl}/orders`, //cart id
};
