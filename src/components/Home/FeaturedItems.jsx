import classes from "./FeaturedItems.module.css";
import ItemCard from "../Store/ItemCard";
import useHttp from "../../hooks/useHttp";

const requestConfig = {};

export default function FeaturedItems() {
  const {
    data: loadedItems,
  } = useHttp('https://fakestoreapi.com/products?limit=6', requestConfig, []);


  console.log(loadedItems);

  return (
    <section className={classes.featured}>
      <h2>Featured Items</h2>
      <ul className={classes['item-list']}>
        {loadedItems.map((item) => (
          <ItemCard key={item.id} item={item}/>
        ))}
      </ul>
    </section>
  )
}