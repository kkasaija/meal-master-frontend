import { Actions } from '../constants/Constants';
import { fetchAllOrders, fetchSingleOrder } from '../../api/api';

export const allOrders = () => async (dispatch) => {
  const orders = await fetchAllOrders();
  dispatch({ type: Actions.ALL_ORDERS, payload: orders });
};

export const singleOrder = (orderid) => async (dispatch) => {
  const order = await fetchSingleOrder(orderid);
  dispatch({ type: Actions.SINGLE_ORDER, payload: order });
};