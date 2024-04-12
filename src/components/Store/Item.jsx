import classes from "./Item.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { useState } from "react";

export default function Item({ item }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    dispatch(cartActions.addItemToCart({ item, quantity }));
  };

  return (
    <section className={classes["item-container"]}>
      <div className={classes.item}>
        <img src={item.image} alt={item.title} />
        <div className={classes["item-info"]}>
          <h1>{item.title}</h1>
          <p className={classes.price}>${item.price.toFixed(2)}</p>
          <div className={classes.quantity}>
            <label htmlFor="number">Quantity:</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="1"
              value={quantity}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      <hr />
      <div className={classes["item-details"]}>
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </section>
  );
}
