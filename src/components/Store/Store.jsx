import classes from './Store.module.css';
import useHttp from '../../hooks/useHttp';
import ItemCard from './ItemCard';

const requestConfig = {};

export default function Store() {
  const {
    data: loadedItems,
  } = useHttp('https://fakestoreapi.com/products/', requestConfig, []);

 return (
  <ul className={classes['item-list']}>
        {loadedItems.map((item) => (
          <ItemCard key={item.id} item={item}/>
        ))}
      </ul>
 )
}