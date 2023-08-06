import classes from './CartButton.module.css';
import { uiActions } from '../../Store/ui-Slice';
import { useDispatch ,useSelector} from 'react-redux'

const CartButton = (props) => {
  const quantity = useSelector(state=>state.cart.totalQuantity);
  const dispatch = useDispatch();
  const cartToggleHandler=()=>{
    dispatch(uiActions.toggle());
  }
  
  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
