import classes from './Store.module.css';
import ItemCard from './ItemCard';


export default function Store({ loadedList }) {

 return (
  <ul className={classes['item-list']}>
        {loadedList.map((item) => (
          <ItemCard key={item.id} item={item}/>
        ))}
      </ul>
 )
}