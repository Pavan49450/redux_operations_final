import { uiActions } from "./ui-Slice";
import { cartActions } from "./cart-Slice";

export const sendCartData = (cart) => {

  return async (dispatch) => {
    dispatch(uiActions.setNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'sending cart data!',
    }));
    const sentRequest = async () => {
      const response = await fetch('https://cartitems-327e5-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error('Senting Cart data failed');
      }
      // console.log("cart", cart);
      // console.log("data",cart);
    }
    try {
      await sentRequest();
      dispatch(uiActions.setNotification({
        status: 'Success',
        title: 'Success!',
        message: 'sent cart data successfully!',
      }));
    } catch (error) {
      dispatch(uiActions.setNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart failed'
      }));
    }
  }
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://cartitems-327e5-default-rtdb.firebaseio.com/cart.json');
      if (!response.ok) {
        throw new Error('Cannot Fetch Cart Data');
      }
      const data = await response.json();
      // console.log("DATA", data);
      return data;
    };
    try {
      const cartData = await fetchData();
      // console.log("cartData", cartData);
      dispatch(cartActions.replaceCart({
        items:cartData.items || [],
        change:cartData.change,
        totalQuantity:cartData.totalQuantity || 0,
        totalCartPrice:cartData.totalCartPrice || 0,
      }));
    } catch (error) {
      dispatch(uiActions.setNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching Cart Data failed'
      }))
    }
  }
}