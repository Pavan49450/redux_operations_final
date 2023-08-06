import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from 'react-redux';
import {cartActions} from '../../Store/cart-Slice';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const addItemHandler=()=>{
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
    }))
  }
  const { title, price, description,id} = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>₹{price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
