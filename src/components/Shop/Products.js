import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DummyProducts =[
  {
    id : 'p1',
    price : 23,
    title : 'Product 1',
    description : 'Description Of Product 1'
  },
  {
    id : 'p2',
    price : 45,
    title : 'Product 2',
    description : 'Description Of Product 2'
  },
  {
    id : 'p3',
    price : 15,
    title : 'Product 3',
    description : 'Description Of Product 3'
  },
  {
    id : 'p4',
    price : 64,
    title : 'Product 4',
    description : 'Description Of Product 4'
  },
  {
    id : 'p5',
    price : 45,
    title : 'Product 5',
    description : 'Description Of Product 5'
  },
  {
    id : 'p6',
    price : 45,
    title : 'Product 6',
    description : 'Description Of Product 6'
  },
  {
    id : 'p7',
    price : 56,
    title : 'Product 7',
    description : 'Description Of Product 7'
  },
  {
    id : 'p8',
    price : 23,
    title : 'Product 8',
    description : 'Description Of Product 8'
  },
  {
    id : 'p9',
    price : 53,
    title : 'Product 9',
    description : 'Description Of Product 2'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((product) =><ProductItem
          id={product.id}                               
          key={product.id}                               
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
