import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector,useDispatch } from 'react-redux';
import { uiActions } from '../../Store/ui-Slice';
import { useEffect } from 'react';

const Cart = (props) => {
  const cartItems = useSelector(state=>state.cart.items)
  const totalCartPrice = useSelector(state=>state.cart.totalCartPrice);
  const dispatch = useDispatch();
  const cartToggleHandler=()=>{
    dispatch(uiActions.toggle());
  }
  useEffect(()=>{
    if(cartItems.length === 0){
      cartToggleHandler();
    }
  })

  // const showCart = useSelector(state=>state.ui.showCart)
  return (
    <div className={classes.overlay} >
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <div className={classes.cartItems}>
      <ul>
        {cartItems.map((item)=><CartItem
              key={item.id}                   
              id={item.id}
              title={item.title}
              quantity={item.quantity}
              total={item.quantity*item.price}
              price={item.price}
        />)}
      </ul>
        </div>
      <div><h2>Total : ₹{totalCartPrice}</h2></div>
      <div className={classes.Cart_actions}>
        <button>Order</button>
        <button onClick={cartToggleHandler}>Add More</button>
      </div>
    </Card>
      </div>
  );
};

export default Cart;
