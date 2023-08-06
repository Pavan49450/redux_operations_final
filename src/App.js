import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { sendCartData, fetchCartData } from "./Store/cart-Actions"
import Notification from "./components/UI/Notification"
import { cartActions } from "./Store/cart-Slice"
import { uiActions } from './Store/ui-Slice';
let isInitial = true;

function App() {
  // const [isInitial , setIsInitial] = useState(true);
  const showCart = useSelector(state => state.ui.showCart)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.ui.notifications);
  // console.log("In the App items cart",cart.items);

  useEffect(() => {
    dispatch(fetchCartData());
    dispatch(cartActions.restoreChange());
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.change) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(uiActions.hideNotofications());
      console.log("notifications->",notifications);
    }, 5000);
    return () => clearTimeout(timer);
   
  }, [notifications]);

  return (
    <>
      {notifications && <Notification status={notifications.status} title={notifications.title} message={notifications.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
