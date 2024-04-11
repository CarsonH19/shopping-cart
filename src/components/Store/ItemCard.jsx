import classes from "./ItemCard.module.css"
import { currencyFormatter } from "../../util/formatting";

export default function ItemCard({ item }) {
  return (
    <li className={classes.item}>
      <article className={classes['item-article']}>
        <img src={item.image} alt={item.title} />
        <div className={classes['item-card-info']}>
          <h3>{item.title}</h3>
          <p className={classes['item-price']}>
            {currencyFormatter.format(item.price)}
          </p>
        </div>
      </article>
    </li>
  );
}
