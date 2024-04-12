import classes from "./FeaturedItems.module.css";
import ItemCard from "../Store/ItemCard";
// import useHttp from "../../hooks/useHttp";


export default function FeaturedItems({ loadedList }) {
  return (
    <section className={classes.featured}>
      <h2>Featured Items</h2>
      <ul className={classes['item-list']}>
        {loadedList.map((item) => (
          <ItemCard key={item.id} item={item}/>
        ))}
      </ul>
    </section>
  )
}